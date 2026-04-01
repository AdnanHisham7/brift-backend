import { IUserRepository } from "@/domain/repositories/user.repository.interface";
import { User } from "@/domain/entities/User";
import { UserModel } from "@/infrastructure/database/models/user.model";
import { RoleModel } from "@/infrastructure/database/models/role.model";

export class UserRepository implements IUserRepository {
  async findSuperAdmin(): Promise<User | null> {
    const role = await RoleModel.findOne({ name: "SUPER_ADMIN" });
    if (!role) return null;

    const user = await UserModel.findOne({ roleId: role._id });
    if (!user) return null;

    return new User({
      id: user._id.toString(),
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      password: user.password,
      roleId: user.roleId.toString(),
      roleName: role.name,
    });
  }

  async findByEmail(email: string): Promise<User | null> {
    const user = await UserModel.findOne({ email });
    if (!user) return null;

    const role = await RoleModel.findById(user.roleId);

    return new User({
      id: user._id.toString(),
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      password: user.password,
      roleId: user.roleId.toString(),
      roleName: role?.name,
    });
  }

  async create(user: User): Promise<User> {
    const createdUser = await UserModel.create({
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      password: user.password,
      roleId: user.roleId,
    });

    return new User({
      id: createdUser._id.toString(),
      firstName: createdUser.firstName,
      lastName: createdUser.lastName,
      email: createdUser.email,
      password: createdUser.password,
      roleId: createdUser.roleId.toString(),
    });
  }
}
