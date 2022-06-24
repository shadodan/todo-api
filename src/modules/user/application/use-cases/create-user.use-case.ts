import { inject, injectable } from 'tsyringe';

import { ICreateUserDto } from '../dto/create-user.dto';
import { User } from '../../core/entities/user.entity';
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

  async execute(data: ICreateUserDto): Promise<void> {
    createUserValidator(data);

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
