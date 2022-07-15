import { PrismaUserRepository } from '../prisma/prisma-user.repository';
import { CreateUserUseCase } from '../../use-cases/create-user.use-case';
import { BcryptEncoderProvider } from '../../../../infra/providers/encoder/bcrypt-encoder.provider';

export function createUserFactory(): CreateUserUseCase {
  const repository = new PrismaUserRepository();
  const encoderProvider = new BcryptEncoderProvider();

  return new CreateUserUseCase(repository, encoderProvider);
}
