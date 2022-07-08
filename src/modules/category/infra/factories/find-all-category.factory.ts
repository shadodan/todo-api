import { FindAllCategoryByUserUseCase } from '../../application/use-cases/find-all-category-by-user.use-case';
import { PrismaCategoryRepository } from '../prisma/prisma-category.repository';

export function findAllCategoryFactory(): FindAllCategoryByUserUseCase {
  const repository = new PrismaCategoryRepository();

  return new FindAllCategoryByUserUseCase(repository);
}
