import { User } from '../entities/user.entity';

export interface IUserRepository {
  create(data: User): Promise<void>;

  findAll(): Promise<User[]>;

  findOne(id: string): Promise<User | null>;

  update(id: string, data: Partial<User>): Promise<void>;

  remove(id: string): Promise<void>;

  findByEmail(email: string): Promise<User | null>;

  findByPhone(phone: string): Promise<User | null>;
}
