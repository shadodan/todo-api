import { IUpdateUserDto } from '../application/dto/update-user.dto';
import { UserToken } from '../../../auth/core/interfaces/user-token';
import { IUserRepository } from '../core/repositories/user.repository';
import { updateUserValidator } from '../application/validators/update-user.validator';

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
