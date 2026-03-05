import { IUserRepository } from "../../domain/repositories/user.repository.interface";
import { IRoleRepository } from "../../domain/repositories/role.repository.interface";
import { BootstrapSuperAdminDTO } from "../dtos/bootstrap-super-admin.dto";
import { User } from "../../domain/entities/User";
import { Role } from "../../domain/entities/Role";
import { PasswordService } from "../../infrastructure/services/password.service";

export class BootstrapSuperAdminUseCase {
  constructor(
    private userRepository: IUserRepository,
    private roleRepository: IRoleRepository,
  ) {}

  async execute(data: BootstrapSuperAdminDTO) {
    const existingSuperAdmin = await this.userRepository.findSuperAdmin();

    if (existingSuperAdmin) {
      throw new Error("Super admin already exists");
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

    const hashedPassword = await PasswordService.hash(data.password);

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
