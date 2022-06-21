import { inject, injectable } from 'tsyringe';

import { IUserRepository } from '../../core/repositories/user.repository';

@injectable()
export class RemoveUserUseCase {
  constructor(
    @inject('UserRepository')
    private userRepository: IUserRepository
  ) {}

  async execute(id: string): Promise<void> {
    // TODO: MAKE ONLY THE AUTHENTICATED USER CAN REMOVE ITSELF
    await this.userRepository.remove(id);
  }
}
