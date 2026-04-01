import { config } from "@/config";
import app from "@/app";
import { connectDatabase } from "@/config/database";
import { logger } from "@/infrastructure/services/logger.service";

const startServer = async () => {
  await connectDatabase();

  app.listen(config.PORT, () => {
    logger.info(`🚀 Server running on port ${config.PORT} [${config.NODE_ENV}]`);
  });
};

startServer();