import { inject, injectable } from 'tsyringe';
import { IUserRepository } from '../../core/repositories/user.repository';
import { removeUserValidator } from '../validators/remove-user.validator';
import { UserToken } from '../../../../auth/core/interfaces/user-token';

@injectable()
export class RemoveUserUseCase {
  constructor(
    @inject('UserRepository')
    private userRepository: IUserRepository
  ) {}

  async execute(id: string, user: UserToken): Promise<void> {
    removeUserValidator(id, user);

    await this.userRepository.remove(id);
  }
}
