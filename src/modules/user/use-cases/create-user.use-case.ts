import { User } from '../core/entities/user.entity';
import { ICreateUserDto } from '../application/dto/create-user.dto';
import { DomainError } from '../../../core/domain/errors/domain.error';
import { IUserRepository } from '../core/repositories/user.repository';
import { createUserValidator } from '../application/validators/create-user.validator';
import { IEncoderProvider } from '../../../core/application/providers/encoder.provider';

export class CreateUserUseCase {
  constructor(
    private userRepository: IUserRepository,
    private encoderProvider: IEncoderProvider
  ) {}

  async execute({
    passwordVerification,
    ...data
  }: ICreateUserDto): Promise<void> {
    createUserValidator({ ...data, passwordVerification });

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
