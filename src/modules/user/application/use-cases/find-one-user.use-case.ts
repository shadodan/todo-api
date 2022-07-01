import { User } from '../../core/entities/user.entity';
import { IUserRepository } from '../../core/repositories/user.repository';

type FindOneUserResponse = Omit<User, 'password' | 'createdAt' | 'updatedAt'>;

export class FindOneUserUseCase {
  constructor(private userRepository: IUserRepository) {}

  async execute(id: string): Promise<FindOneUserResponse> {
    const user = await this.userRepository.findOne(id);

    if (!user) {
      throw new Error('User not found');
    }

    return {
      id: user.id,
      username: user.username,
      phone: user.phone,
      email: user.email,
    } as FindOneUserResponse;
  }
}
