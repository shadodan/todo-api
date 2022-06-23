import { inject, injectable } from 'tsyringe';
import { IUserRepository } from '../../core/repositories/user.repository';
import { removeUserValidator } from '../validators/remove-user.validator';
import { AppError } from '../../../../core/domain/errors/app.error';
import { UserToken } from '../../../../auth/core/interfaces/user-token';

@injectable()
export class RemoveUserUseCase {
  constructor(
    @inject('UserRepository')
    private userRepository: IUserRepository
  ) {}

  async execute(id: string, user: UserToken): Promise<void> {
    if (!removeUserValidator(id, user)) {
      throw new AppError('Validation error');
    }

    await this.userRepository.remove(id);
  }
}
