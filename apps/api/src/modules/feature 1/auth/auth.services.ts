import { createHash, randomInt } from "node:crypto";
import { prisma } from "../../../lib/prisma";
import { sendMail } from "../../../lib/feature 1/mail";
import type {
  RegisterSchema,
  VerifyEmailSchema,
  LoginSchema,
} from "./auth.validation";
import argon2 from "argon2";

function generateVerificationCode() {
  return randomInt(100000, 1000000).toString();
}

function hashVerificationCode(email: string, code: string) {
  return createHash("sha256")
    .update(`${email.toLowerCase()}:${code}`)
    .digest("hex");
}

async function checkEmailExists(email: string) {
  const user = await prisma.user.findUnique({ where: { email } });
  if (user) throw new Error("Email already exists!");
}

function getCustomerData(
  body: RegisterSchema,
  tokenHash: string,
  expiresAt: Date,
) {
  return {
    name: body.name,
    email: body.email,
    role: "CUSTOMER" as const,
    provider: "CREDENTIAL" as const,
    isVerified: false,
    emailVerificationTokens: {
      create: { tokenHash, expiresAt },
    },
  };
}

async function createCustomer(
  body: RegisterSchema,
  tokenHash: string,
  expiresAt: Date,
) {
  return prisma.user.create({
    data: getCustomerData(body, tokenHash, expiresAt),
    select: {
      id: true,
      name: true,
      email: true,
      role: true,
      isVerified: true,
    },
  });
}

async function sendVerificationEmail(
  email: string,
  name: string,
  code: string,
) {
  await sendMail({
    to: email,
    subject: "Verify your Laundrix account",
    templateName: "verify-email.hbs",
    context: { name, verificationCode: code },
  });
}

export const registerService = async (body: RegisterSchema) => {
  await checkEmailExists(body.email);
  const code = generateVerificationCode();
  const tokenHash = hashVerificationCode(body.email, code);
  const expiresAt = new Date(Date.now() + 60 * 60 * 1000);
  const user = await createCustomer(body, tokenHash, expiresAt);
  await sendVerificationEmail(body.email, body.name, code);
  return { message: "Register success", user };
};

async function findVerificationCode(tokenHash: string) {
  return prisma.emailVerificationToken.findUnique({
    where: { tokenHash },
    include: { user: true },
  });
}

type VerificationRecord = NonNullable<
  Awaited<ReturnType<typeof findVerificationCode>>
>;

function checkVerificationCode(record: VerificationRecord) {
  if (record.usedAt) throw new Error("Code already used");
  if (record.expiresAt < new Date()) {
    throw new Error("Verification code expired");
  }
  if (record.user.isVerified) {
    throw new Error("Email already verified");
  }
}

async function saveVerifiedUser(
  record: VerificationRecord,
  passwordHash: string,
) {
  const now = new Date();
  await prisma.$transaction(async (tx) => {
    const result = await tx.emailVerificationToken.updateMany({
      where: { id: record.id, usedAt: null, expiresAt: { gt: now } },
      data: { usedAt: now },
    });
    if (result.count !== 1) throw new Error("Invalid or expired code");
    await tx.user.update({
      where: { id: record.userId },
      data: { password: passwordHash, isVerified: true },
    });
  });
}

export const verifyEmailService = async (body: VerifyEmailSchema) => {
  const tokenHash = hashVerificationCode(body.email, body.code);
  const record = await findVerificationCode(tokenHash);
  if (!record) throw new Error("Invalid verification code");
  checkVerificationCode(record);
  const passwordHash = await argon2.hash(body.password);
  await saveVerifiedUser(record, passwordHash);
  return { message: "Email verified successfully. Please log in." };
};

async function findLoginUser(email: string) {
  return prisma.user.findUnique({
    where: { email: email.trim().toLowerCase() },
  });
}

function checkLoginUser(user: Awaited<ReturnType<typeof findLoginUser>>) {
  if (!user || user.deletedAt) {
    throw new Error("Invalid email or password");
  }
  if (!user.isVerified) {
    throw new Error("Please verify your email before logging in");
  }
  if (!user.password || user.provider !== "CREDENTIAL") {
    throw new Error("This account uses social login");
  }
}

export const loginService = async (body: LoginSchema) => {
  const user = await findLoginUser(body.email);
  checkLoginUser(user);
  const valid = await argon2.verify(user!.password!, body.password);
  if (!valid) throw new Error("Invalid email or password");
  return {
    message: "Login successful",
    user: { id: user!.id, name: user!.name, email: user!.email },
  };
};
