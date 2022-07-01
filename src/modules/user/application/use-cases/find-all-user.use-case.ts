import { User } from '../../core/entities/user.entity';
import { IUserRepository } from '../../core/repositories/user.repository';

type ListUserResponse = Pick<User, 'id' | 'username' | 'email'>;

export class FindAllUserUseCase {
  constructor(private userRepository: IUserRepository) {}

  async execute(): Promise<ListUserResponse[]> {
    const users = await this.userRepository.findAll();

    return users.map(user => {
      return {
        id: user.id,
        username: user.username,
        email: user.email,
      } as ListUserResponse;
    });
  }
}
