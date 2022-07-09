import { RemoveCategoryUseCase } from '../../use-cases/remove-category.use-case';
import { PrismaCategoryRepository } from '../prisma/prisma-category.repository';

export function removeCategoryFactory(): RemoveCategoryUseCase {
  const repository = new PrismaCategoryRepository();

  return new RemoveCategoryUseCase(repository);
}
