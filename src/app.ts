import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import { errorHandler } from "@/interfaces/middleware/error-handler.middleware";
import systemRoutes from "@/interfaces/routes/system.routes";
import authRoutes from "@/interfaces/routes/auth.routes";
import healthRoutes from "@/interfaces/routes/health.routes";

const app = express();

// ── Global middleware ──
app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(morgan("dev"));

// ── Routes ──
app.use("/api/health", healthRoutes);
app.use("/api/system", systemRoutes);
app.use("/api/auth", authRoutes);

// ── Error handler (must be last) ──
app.use(errorHandler);

export default app;