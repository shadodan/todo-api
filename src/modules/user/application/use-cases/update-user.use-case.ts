import { IUpdateUserDto } from '../dto/update-user.dto';
import { UserToken } from '../../../../auth/core/interfaces/user-token';
import { IUserRepository } from '../../core/repositories/user.repository';
import { updateUserValidator } from '../validators/update-user.validator';

export class UpdateUserUseCase {
  constructor(private userRepository: IUserRepository) {}

  async execute(
    id: string,
    data: IUpdateUserDto,
    user: UserToken
  ): Promise<void> {
    updateUserValidator(id, data, user);

    await this.userRepository.update(id, data);
  }
}
