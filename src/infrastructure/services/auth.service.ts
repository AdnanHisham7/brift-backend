import jwt from "jsonwebtoken";
import {
  IAuthService,
  AuthTokenPayload,
} from "@/domain/services/auth-service.interface";
import { config } from "@/config";

export class AuthService implements IAuthService {
  generateToken(payload: AuthTokenPayload): string {
    return jwt.sign(payload, config.JWT_SECRET, {
      expiresIn: config.JWT_EXPIRES_IN as any,
    });
  }

  verifyToken(token: string): AuthTokenPayload {
    return jwt.verify(token, config.JWT_SECRET) as AuthTokenPayload;
  }
}
