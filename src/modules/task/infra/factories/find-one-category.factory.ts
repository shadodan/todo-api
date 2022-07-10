import { FindOneTaskUseCase } from '../../use-cases/find-one-task.use-case';
import { PrismaTaskRepository } from '../prisma/prisma-task.repository';

export function findOneCategoryFactory(): FindOneTaskUseCase {
  const repository = new PrismaTaskRepository();

  return new FindOneTaskUseCase(repository);
}
