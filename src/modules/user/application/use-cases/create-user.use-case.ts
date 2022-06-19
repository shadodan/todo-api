import { inject, injectable } from 'tsyringe';

import { User } from '../../domain/entities/user.entity';
import { CreateUserDto } from '../dto/create-user.dto';
import { IUserRepository } from '../../domain/repositories/user.repository';

@injectable()
export class CreateUserUseCase {
  constructor(
    @inject('UserRepository')
    private userRepository: IUserRepository
  ) {}

  async execute(data: CreateUserDto): Promise<void> {
    // TODO: ADD METHODS FIND BY EMAIL AND BY PHONE TO THROW ERRORS IF EXISTS
    const user = new User();

    Object.assign(user, { ...data });

    // TODO: ADD HASH TO PASSWORD
    await this.userRepository.create(user);
  }
}
