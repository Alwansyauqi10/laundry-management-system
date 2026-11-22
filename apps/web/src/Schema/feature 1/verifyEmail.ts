import { z } from "zod";

export const verifyEmailSchema = z
  .object({
    email: z.string().trim().email("Enter a valid email"),
    code: z.string().regex(/^\d{6}$/, "Enter the 6-digit code"),
    password: z.string().min(8, "Password must be at least 8 characters"),
    confirmPassword: z.string().min(1, "Please confirm your password"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export type VerifyEmailSchema = z.infer<typeof verifyEmailSchema>;
