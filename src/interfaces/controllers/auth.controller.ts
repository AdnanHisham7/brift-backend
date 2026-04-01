import { Request, Response, NextFunction } from "express";
import { container } from "@/infrastructure/container";
import { sendSuccess } from "@/shared/utils/api-response";

export const login = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await container.loginUseCase.execute(req.body);

    return sendSuccess(res, {
      message: "Login successful",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
