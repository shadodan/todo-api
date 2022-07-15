import { PrismaUserRepository } from '../prisma/prisma-user.repository';
import { FindAllUserUseCase } from '../../use-cases/find-all-user.use-case';

export function findAllUserFactory(): FindAllUserUseCase {
  const repository = new PrismaUserRepository();

  return new FindAllUserUseCase(repository);
}
