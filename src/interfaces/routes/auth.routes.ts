import { Router } from "express";
import { login } from "@/interfaces/controllers/auth.controller";
import { validateRequest } from "@/interfaces/middleware/validate-request.middleware";
import { loginSchema } from "@/shared/validators/login.schema";

const router = Router();

router.post("/login", validateRequest(loginSchema), login);

export default router;
