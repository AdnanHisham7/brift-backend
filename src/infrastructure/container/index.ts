import { UserRepository } from "@/infrastructure/repositories/user.repository";
import { RoleRepository } from "@/infrastructure/repositories/role.repository";
import { PasswordService } from "@/infrastructure/services/password.service";
import { AuthService } from "@/infrastructure/services/auth.service";
import { BootstrapSuperAdminUseCase } from "@/application/usecases/bootstrap-super-admin.usecase";
import { LoginUseCase } from "@/application/usecases/login.usecase";

class Container {
  // ── Repositories ──
  userRepository = new UserRepository();
  roleRepository = new RoleRepository();

  // ── Services ──
  passwordService = new PasswordService();
  authService = new AuthService();

  // ── Use cases ──
  bootstrapSuperAdminUseCase = new BootstrapSuperAdminUseCase(
    this.userRepository,
    this.roleRepository,
    this.passwordService,
  );

  loginUseCase = new LoginUseCase(
    this.userRepository,
    this.passwordService,
    this.authService,
  );
}

export const container = new Container();
