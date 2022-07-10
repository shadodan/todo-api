import { User } from '../entities/user.entity';
import { IFindAllUserResponse } from '../interfaces/find-all-user-response.interface';
import { IFindOneUserResponse } from '../interfaces/find-one-user-response.interface';

export interface IUserRepository {
  create(data: User): Promise<void>;

  findAll(): Promise<IFindAllUserResponse[]>;

  findOne(id: string): Promise<IFindOneUserResponse | null>;

  update(id: string, data: Partial<User>): Promise<void>;

  remove(id: string): Promise<void>;

  findByEmail(email: string): Promise<User | null>;

  findByPhone(phone: string): Promise<User | null>;
}
