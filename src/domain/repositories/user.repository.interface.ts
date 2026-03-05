import { User } from "@/domain/entities/User";

export interface IUserRepository {
  findSuperAdmin(): Promise<User | null>;
  create(user: User): Promise<User>;
}
