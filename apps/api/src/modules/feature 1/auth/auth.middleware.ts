import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export const verifyToken = (secretKey: string) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const token = req.cookies?.accessToken;

    if (!token) {
      res.status(401).send({ message: "No token provided" });
      return;
    }

    try {
      const payload = jwt.verify(token, secretKey);
      res.locals.user = payload;
      next();
    } catch {
      res.status(401).send({ message: "Token invalid or expired" });
    }
  };
};
