import { UserRepository } from "../repositories/user.repository";
import { RoleRepository } from "../repositories/role.repository";
import { BootstrapSuperAdminUseCase } from "../../application/usecases/bootstrap-super-admin.usecase";

class Container {
  userRepository = new UserRepository();
  roleRepository = new RoleRepository();

  bootstrapSuperAdminUseCase = new BootstrapSuperAdminUseCase(
    this.userRepository,
    this.roleRepository,
  );
}

export const container = new Container();
