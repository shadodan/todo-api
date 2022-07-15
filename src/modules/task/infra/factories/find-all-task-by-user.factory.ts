import { FindAllTaskByUserUseCase } from '../../use-cases/find-all-task-by-user.use-case';
import { PrismaTaskRepository } from '../prisma/prisma-task.repository';

export function findAllTaskByUserFactory(): FindAllTaskByUserUseCase {
  const repository = new PrismaTaskRepository();

  return new FindAllTaskByUserUseCase(repository);
}
