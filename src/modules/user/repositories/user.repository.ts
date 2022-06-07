import { UpdateUserDTO, UserDTO } from '../dto/user.dto';

export interface UserRepository {
  create(data: UserDTO): Promise<void>;

  list(): Promise<UserDTO[]>;

  findById(id: string): Promise<UserDTO>;

  update(id: string, data: UpdateUserDTO): Promise<void>;

  delete(id: string): Promise<void>;
}
