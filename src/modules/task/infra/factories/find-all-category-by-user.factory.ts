import { FindAllTaskByUserUseCase } from '../../use-cases/find-all-task-by-user.use-case';
import { PrismaCategoryRepository } from '../prisma/prisma-category.repository';

export function findAllCategoryByUserFactory(): FindAllTaskByUserUseCase {
  const repository = new PrismaCategoryRepository();

  return new FindAllTaskByUserUseCase(repository);
}
