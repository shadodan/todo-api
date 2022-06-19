import { inject, injectable } from 'tsyringe';

import { IUserRepository } from '../../domain/repositories/user.repository';

@injectable()
export class RemoveUserUseCase {
  constructor(
    @inject('UserRepository')
    private userRepository: IUserRepository
  ) {}

  async execute(id: string): Promise<void> {
    await this.userRepository.remove(id);
  }
}
