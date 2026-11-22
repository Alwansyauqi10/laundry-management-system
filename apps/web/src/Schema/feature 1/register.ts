import { z } from "zod";

export const registerSchema = z.object({
  name: z.string().trim().min(3, {
    message: "Name must be at least 3 characters",
  }),
  email: z.string().trim().email({
    message: "Please enter a valid email",
  }),
});

export type RegisterSchema = z.infer<typeof registerSchema>;
