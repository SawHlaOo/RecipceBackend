import { NextFunction, Request, RequestHandler, Response } from "express";
import { z } from "zod";
import { ApiError } from "./errorhandler";

export const validate = (schema: z.ZodType): RequestHandler => (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const result = schema.safeParse(req.body);

  if (!result.success) {
    next(new ApiError(result.error.issues.map((issue) => issue.message).join(", ")));
    return;
  }

  req.body = result.data;
  next();
};
