import { inject, injectable } from 'tsyringe';

import { User } from '../../core/entities/user.entity';
import { IUserRepository } from '../../core/repositories/user.repository';

@injectable()
export class FindAllUserUseCase {
  constructor(
    @inject('UserRepository')
    private userRepository: IUserRepository
  ) {}

  async execute(): Promise<User[]> {
    return this.userRepository.findAll();
  }
}
