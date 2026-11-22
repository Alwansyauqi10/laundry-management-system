import { Request, Response } from "express";
import {
  registerService,
  verifyEmailService,
  loginService,
} from "./auth.services";
import type { VerifyEmailSchema, LoginSchema } from "./auth.validation";

export const registerController = async (req: Request, res: Response) => {
  const result = await registerService(req.body);
  res.status(200).send({
    message: result.message,
    user: result.user,
  });
};

export const verifyEmailController = async (req: Request, res: Response) => {
  try {
    const result = await verifyEmailService(req.body as VerifyEmailSchema);
    res.status(200).send(result);
  } catch (error) {
    res.status(400).send({
      message: error instanceof Error ? error.message : "Verification failed",
    });
  }
};

export const loginController = async (req: Request, res: Response) => {
  try {
    const result = await loginService(req.body as LoginSchema);
    res.status(200).send(result);
  } catch (error) {
    res.status(401).send({
      message: error instanceof Error ? error.message : "Login failed",
    });
  }
};
