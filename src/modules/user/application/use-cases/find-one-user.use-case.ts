import { inject, injectable } from 'tsyringe';

import { User } from '../../core/entities/user.entity';
import { IUserRepository } from '../../core/repositories/user.repository';

@injectable()
export class FindOneUserUseCase {
  constructor(
    @inject('UserRepository')
    private userRepository: IUserRepository
  ) {}

  async execute(id: string): Promise<User> {
    // TODO: MAKE ONLY THE AUTHENTICATED USER CAN SEE ITS COMPLETE INFO (EXCLUDING PASSWORD)
    const user = await this.userRepository.findOne(id);

    if (!user) {
      throw new Error('User not found');
    }

    return user;
  }
}
