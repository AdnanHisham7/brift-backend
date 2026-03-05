import { Router } from "express";
import { bootstrapSuperAdmin } from "@/interfaces/controllers/bootstrap-super-admin.controller";
import { validateRequest } from "@/interfaces/middleware/validate-request.middleware";
import { bootstrapSuperAdminSchema } from "@/shared/validators/bootstrap-super-admin.schema";

const router = Router();

router.post(
  "/bootstrap-super-admin",
  validateRequest(bootstrapSuperAdminSchema),
  bootstrapSuperAdmin,
);

export default router;
