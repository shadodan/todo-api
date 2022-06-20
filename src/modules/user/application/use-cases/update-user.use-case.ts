import { inject, injectable } from 'tsyringe';

import { UpdateUserDto } from '../dto/update-user.dto';
import { IUserRepository } from '../../core/repositories/user.repository';

@injectable()
export class UpdateUserUseCase {
  constructor(
    @inject('UserRepository')
    private userRepository: IUserRepository
  ) {}

  async execute(id: string, data: UpdateUserDto): Promise<void> {
    // TODO: MAKE ONLY THE AUTHENTICATED USER CAN UPDATE ITSELF
    await this.userRepository.update(id, data);
  }
}
