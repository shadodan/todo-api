import { PrismaUserRepository } from '../prisma/prisma-user.repository';
import { UpdateUserUseCase } from '../../application/use-cases/update-user.use-case';

export function updateUserFactory(): UpdateUserUseCase {
  const repository = new PrismaUserRepository();

  return new UpdateUserUseCase(repository);
}
