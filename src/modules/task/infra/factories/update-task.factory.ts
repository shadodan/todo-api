import { UpdateTaskUseCase } from '../../use-cases/update-task.use-case';
import { PrismaTaskRepository } from '../prisma/prisma-task.repository';
import { PrismaCriticalityLevelRepository } from '../../../criticality-level/infra/prisma/prisma-criticality-level.repository';
import { PrismaCategoryRepository } from '../../../category/infra/prisma/prisma-category.repository';

export function updateTaskFactory(): UpdateTaskUseCase {
  const taskRepository = new PrismaTaskRepository();

  const criticalityLevelRepository = new PrismaCriticalityLevelRepository();

  const categoryRepository = new PrismaCategoryRepository();

  return new UpdateTaskUseCase(
    taskRepository,
    criticalityLevelRepository,
    categoryRepository
  );
}
