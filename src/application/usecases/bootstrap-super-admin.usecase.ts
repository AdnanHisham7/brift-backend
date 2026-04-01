import { IUserRepository } from "@/domain/repositories/user.repository.interface";
import { IRoleRepository } from "@/domain/repositories/role.repository.interface";
import { IPasswordService } from "@/domain/services/password-service.interface";
import { BootstrapSuperAdminDTO } from "@/application/dtos/bootstrap-super-admin.dto";
import { User } from "@/domain/entities/User";
import { Role } from "@/domain/entities/Role";
import { ConflictError } from "@/domain/errors/conflict-error";

export class BootstrapSuperAdminUseCase {
  constructor(
    private userRepository: IUserRepository,
    private roleRepository: IRoleRepository,
    private passwordService: IPasswordService,
  ) {}

  async execute(data: BootstrapSuperAdminDTO) {
    const existingSuperAdmin = await this.userRepository.findSuperAdmin();

    if (existingSuperAdmin) {
      throw new ConflictError("Super admin already exists");
    }

    let role = await this.roleRepository.findByName("SUPER_ADMIN");

    if (!role) {
      role = await this.roleRepository.create(
        new Role({
          name: "SUPER_ADMIN",
          description: "System Super Administrator",
          isSystemRole: true,
        }),
      );
    }

    const hashedPassword = await this.passwordService.hash(data.password);

    const user = new User({
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      password: hashedPassword,
      roleId: role.id!,
    });

    return this.userRepository.create(user);
  }
}
