import { inject, injectable } from 'tsyringe';

import { User } from '../../core/entities/user.entity';
import { IUserRepository } from '../../core/repositories/user.repository';
import { removeUserValidator } from '../validators/remove-user.validator';
import { AppError } from '../../../../core/domain/errors/app.error';

@injectable()
export class RemoveUserUseCase {
  constructor(
    @inject('UserRepository')
    private userRepository: IUserRepository
  ) {}

  async execute(id: string, user: User): Promise<void> {
    if (!removeUserValidator(id, user)) {
      throw new AppError('Validation error');
    }

    await this.userRepository.remove(id);
  }
}
