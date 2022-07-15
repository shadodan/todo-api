import { FindOneTaskUseCase } from '../../use-cases/find-one-task.use-case';
import { PrismaTaskRepository } from '../prisma/prisma-task.repository';

export function findOneTaskFactory(): FindOneTaskUseCase {
  const repository = new PrismaTaskRepository();

  return new FindOneTaskUseCase(repository);
}
