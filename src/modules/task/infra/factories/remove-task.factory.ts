import { RemoveTaskUseCase } from '../../use-cases/remove-task.use-case';
import { PrismaTaskRepository } from '../prisma/prisma-task.repository';

export function removeTaskFactory(): RemoveTaskUseCase {
  const repository = new PrismaTaskRepository();

  return new RemoveTaskUseCase(repository);
}
