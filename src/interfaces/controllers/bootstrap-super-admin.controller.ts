import { Request, Response, NextFunction } from "express";
import { container } from "@/infrastructure/container";
import { sendSuccess } from "@/shared/utils/api-response";

export const bootstrapSuperAdmin = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await container.bootstrapSuperAdminUseCase.execute(req.body);

    return sendSuccess(res, {
      message: "Super admin created successfully",
      data: result,
      statusCode: 201,
    });
  } catch (error) {
    next(error);
  }
};
