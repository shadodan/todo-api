import { UpdateTaskUseCase } from '../../use-cases/update-task.use-case';
import { PrismaTaskRepository } from '../prisma/prisma-task.repository';

export function updateCategoryFactory(): UpdateTaskUseCase {
  const repository = new PrismaTaskRepository();

  return new UpdateTaskUseCase(repository);
}
