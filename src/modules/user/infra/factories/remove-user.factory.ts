import { PrismaUserRepository } from '../prisma/prisma-user.repository';
import { RemoveUserUseCase } from '../../application/use-cases/remove-user.use-case';

export function removeUserFactory(): RemoveUserUseCase {
  const repository = new PrismaUserRepository();

  return new RemoveUserUseCase(repository);
}
