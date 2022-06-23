import { inject, injectable } from 'tsyringe';

import { IUpdateUserDto } from '../dto/update-user.dto';
import { AppError } from '../../../../core/domain/errors/app.error';
import { UserToken } from '../../../../auth/core/interfaces/user-token';
import { IUserRepository } from '../../core/repositories/user.repository';
import { updateUserValidator } from '../validators/update-user.validator';

@injectable()
export class UpdateUserUseCase {
  constructor(
    @inject('UserRepository')
    private userRepository: IUserRepository
  ) {}

  async execute(
    id: string,
    data: IUpdateUserDto,
    user: UserToken
  ): Promise<void> {
    if (!updateUserValidator(id, data, user)) {
      throw new AppError('Service unavailable in this method', 405);
    }

    await this.userRepository.update(id, data);
  }
}
