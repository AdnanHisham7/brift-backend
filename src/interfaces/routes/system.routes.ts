import { Router } from "express";
import { bootstrapSuperAdmin } from "@/interfaces/controllers/bootstrap-super-admin.controller";

const router = Router();

router.post("/bootstrap-super-admin", bootstrapSuperAdmin);

export default router;
