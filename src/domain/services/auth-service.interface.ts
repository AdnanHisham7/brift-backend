export interface AuthTokenPayload {
  userId: string;
  email: string;
  role: string;
}

export interface IAuthService {
  generateToken(payload: AuthTokenPayload): string;
  verifyToken(token: string): AuthTokenPayload;
}
