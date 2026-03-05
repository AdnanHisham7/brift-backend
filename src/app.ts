import express from "express";
import cors from "cors";
import helmet from "helmet";
import { errorHandler } from "./interfaces/middleware/error-handler.middleware";
import systemRoutes from "./interfaces/routes/system.routes";

const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json());

app.use("/system", systemRoutes);

app.use(errorHandler);

export default app;