import { FindAllCategoryByUserUseCase } from '../../use-cases/find-all-category-by-user.use-case';
import { PrismaCategoryRepository } from '../prisma/prisma-category.repository';

export function findAllCategoryByUserFactory(): FindAllCategoryByUserUseCase {
  const repository = new PrismaCategoryRepository();

  return new FindAllCategoryByUserUseCase(repository);
}
