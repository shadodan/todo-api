import { inject, injectable } from 'tsyringe';

import { CreateUserDto } from '../dto/create-user.dto';
import { User } from '../../core/entities/user.entity';
import { AppError } from '../../../../core/domain/errors/app.error';
import { DomainError } from '../../../../core/domain/errors/domain.error';
import { IUserRepository } from '../../core/repositories/user.repository';
import { createUserValidator } from '../validators/create-user.validator';
import { IEncoderProvider } from '../../../../core/application/providers/encoder.provider';

@injectable()
export class CreateUserUseCase {
  constructor(
    @inject('UserRepository')
    private userRepository: IUserRepository,
    @inject('EncoderProvider')
    private encoderProvider: IEncoderProvider
  ) {}

  async execute(data: CreateUserDto): Promise<void> {
    if (!createUserValidator(data)) {
      throw new AppError('Missing required arguments');
    }

    const emailAlreadyInUse = await this.userRepository.findByEmail(data.email);

    if (emailAlreadyInUse) {
      throw new DomainError('Email already in use');
    }

    const phoneAlreadyInUse = await this.userRepository.findByPhone(data.phone);

    if (phoneAlreadyInUse) {
      throw new DomainError('Phone already in use');
    }

    const user = new User();

    const password = await this.encoderProvider.encode(data.password);

    Object.assign(user, { ...data, password });

    await this.userRepository.create(user);
  }
}
