import { RequestHandler } from "express";
import { z } from "zod";

export function validate(schema: z.ZodType): RequestHandler {
  return function (req, res, next) {
    const result = schema.safeParse(req.body);

    if (!result.success) {
      res.status(400).send({
        message: "Validation failed",
        errors: result.error.issues,
      });
      return;
    }

    req.body = result.data;
    next();
  };
}
