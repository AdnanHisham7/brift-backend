import { IRoleRepository } from "../../domain/repositories/role.repository.interface";
import { Role } from "../../domain/entities/Role";
import { RoleModel } from "../database/models/role.model";

export class RoleRepository implements IRoleRepository {
  async findByName(name: string): Promise<Role | null> {
    const role = await RoleModel.findOne({ name });

    if (!role) return null;

    return new Role({
      id: role._id.toString(),
      name: role.name,
      description: role.description,
      isSystemRole: role.isSystemRole,
    });
  }

  async create(role: Role): Promise<Role> {
    const created = await RoleModel.create({
      name: role.name,
      description: role.description,
      isSystemRole: role.isSystemRole,
    });

    return new Role({
      id: created._id.toString(),
      name: created.name,
      description: created.description,
      isSystemRole: created.isSystemRole,
    });
  }
}
