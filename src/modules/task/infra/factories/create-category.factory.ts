import { CreateTaskUseCase } from '../../use-cases/create-task.use-case';
import { PrismaCategoryRepository } from '../prisma/prisma-category.repository';

export function createCategoryFactory(): CreateTaskUseCase {
  const repository = new PrismaCategoryRepository();

  return new CreateTaskUseCase(repository);
}
