import { User } from '../core/entities/user.entity';
import { IUserRepository } from '../core/repositories/user.repository';

type FindAllUserResponse = Pick<User, 'id' | 'username' | 'email' | 'image'>;

export class FindAllUserUseCase {
  constructor(private userRepository: IUserRepository) {}

  async execute(): Promise<FindAllUserResponse[]> {
    const users = await this.userRepository.findAll();

    return users.map(user => {
      return {
        id: user.id,
        username: user.username,
        email: user.email,
        image: user.image,
      } as FindAllUserResponse;
    });
  }
}
