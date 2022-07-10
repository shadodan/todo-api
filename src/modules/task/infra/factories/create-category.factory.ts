import { CreateTaskUseCase } from '../../use-cases/create-task.use-case';
import { PrismaTaskRepository } from '../prisma/prisma-task.repository';

export function createCategoryFactory(): CreateTaskUseCase {
  const repository = new PrismaTaskRepository();

  return new CreateTaskUseCase(repository);
}
