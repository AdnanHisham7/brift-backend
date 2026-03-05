import { Role } from "@/domain/entities/Role";

export interface IRoleRepository {
  findByName(name: string): Promise<Role | null>;
  create(role: Role): Promise<Role>;
}
