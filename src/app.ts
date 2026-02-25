import express from "express";
import cors from "cors";
import helmet from "helmet";
import { errorHandler } from "./interfaces/middleware/error-handler.middleware";

const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json());

app.get("/health", (_, res) => {
  res.status(200).json({ status: "OK" });
});

app.use(errorHandler);

export default app;