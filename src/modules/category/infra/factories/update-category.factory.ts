import { UpdateCategoryUseCase } from '../../use-cases/update-category.use-case';
import { PrismaCategoryRepository } from '../prisma/prisma-category.repository';

export function updateCategoryFactory(): UpdateCategoryUseCase {
  const repository = new PrismaCategoryRepository();

  return new UpdateCategoryUseCase(repository);
}
