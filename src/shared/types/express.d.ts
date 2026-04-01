import { AuthTokenPayload } from "@/domain/services/auth-service.interface";

declare global {
  namespace Express {
    interface Request {
      user?: AuthTokenPayload;
    }
  }
}
