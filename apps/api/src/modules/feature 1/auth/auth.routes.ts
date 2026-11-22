import express from "express";
import {
  registerController,
  verifyEmailController,
  loginController,
} from "./auth.controller";
import { validate } from "./auth.validation.middleware";
import {
  registerSchema,
  verifyEmailSchema,
  loginSchema,
} from "./auth.validation";

const authRoutes = express.Router();

authRoutes.post("/register", validate(registerSchema), registerController);

authRoutes.post(
  "/verify-email",
  validate(verifyEmailSchema),
  verifyEmailController,
);

authRoutes.post("/login", validate(loginSchema), loginController);

export { authRoutes };
