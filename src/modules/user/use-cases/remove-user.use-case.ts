import { IUserRepository } from '../core/repositories/user.repository';
import { removeUserValidator } from '../application/validators/remove-user.validator';
import { UserToken } from '../../../auth/core/interfaces/user-token';

export class RemoveUserUseCase {
  constructor(private userRepository: IUserRepository) {}

  async execute(id: string, user: UserToken): Promise<void> {
    removeUserValidator(id, user);

    await this.userRepository.remove(id);
  }
}
