import { IUserRepository } from "@/domain/repositories/user.repository.interface";
import { IPasswordService } from "@/domain/services/password-service.interface";
import { IAuthService } from "@/domain/services/auth-service.interface";
import { LoginDTO } from "@/application/dtos/login.dto";
import { UnauthorizedError } from "@/domain/errors/unauthorized-error";

export class LoginUseCase {
  constructor(
    private userRepository: IUserRepository,
    private passwordService: IPasswordService,
    private authService: IAuthService,
  ) {}

  async execute(data: LoginDTO) {
    const user = await this.userRepository.findByEmail(data.email);

    if (!user) {
      throw new UnauthorizedError("Invalid email or password");
    }

    const isPasswordValid = await this.passwordService.compare(
      data.password,
      user.password,
    );

    if (!isPasswordValid) {
      throw new UnauthorizedError("Invalid email or password");
    }

    const token = this.authService.generateToken({
      userId: user.id!,
      email: user.email,
      role: user.roleName || "UNKNOWN",
    });

    return {
      token,
      user: {
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        role: user.roleName,
      },
    };
  }
}
