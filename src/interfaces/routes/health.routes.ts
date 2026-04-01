import { Router } from "express";
import { sendSuccess } from "@/shared/utils/api-response";

const router = Router();

router.get("/", (_req, res) => {
  sendSuccess(res, {
    data: {
      status: "ok",
      timestamp: new Date().toISOString(),
    },
  });
});

export default router;
