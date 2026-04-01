import mongoose from "mongoose";
import { config } from "@/config";
import { logger } from "@/infrastructure/services/logger.service";

export const connectDatabase = async (): Promise<void> => {
  try {
    await mongoose.connect(config.MONGO_URI);
    logger.info("✅ MongoDB connected successfully");
  } catch (error) {
    logger.error(error, "❌ MongoDB connection failed");
    process.exit(1);
  }
};
