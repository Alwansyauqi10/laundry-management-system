import { z } from "zod";

export const registerSchema = z.object({
  name: z.string().trim().min(3, {
    message: "Name must be at least 3 characters",
  }),
  email: z.string().trim().email({
    message: "Please enter a valid email",
  }),
});

export const loginSchema = z.object({
  email: z.string().trim().email({
    message: "Please enter a valid email",
  }),
  password: z.string().min(1, {
    message: "Password is required",
  }),
});

export const forgotPasswordSchema = z.object({
  email: z.string().trim().email({
    message: "Please enter a valid email",
  }),
});

export const resetPasswordSchema = z.object({
  password: z.string().min(8, {
    message: "Password must be at least 8 characters",
  }),
});

export const verifyEmailSchema = z.object({
  email: z.string().trim().email({
    message: "Please enter a valid email",
  }),
  code: z.string().regex(/^\d{6}$/, {
    message: "Verification code must be 6 digits",
  }),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters",
  }),
});

export type RegisterSchema = z.infer<typeof registerSchema>;
export type LoginSchema = z.infer<typeof loginSchema>;
export type ForgotPasswordSchema = z.infer<typeof forgotPasswordSchema>;
export type ResetPasswordSchema = z.infer<typeof resetPasswordSchema>;
export type VerifyEmailSchema = z.infer<typeof verifyEmailSchema>;
