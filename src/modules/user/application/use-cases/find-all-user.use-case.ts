import { inject, injectable } from 'tsyringe';

import { User } from '../../domain/entities/user.entity';
import { IUserRepository } from '../../domain/repositories/user.repository';

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
