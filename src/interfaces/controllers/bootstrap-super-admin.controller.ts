import { Request, Response, NextFunction } from "express";
import { validateBootstrapSuperAdmin } from "@/shared/validators/bootstrap-super-admin.validator";
import { container } from "@/infrastructure/container";

export const bootstrapSuperAdmin = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const validatedData = validateBootstrapSuperAdmin(req);

    const result =
      await container.bootstrapSuperAdminUseCase.execute(validatedData);

    res.status(201).json({
      message: "Super admin created successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
