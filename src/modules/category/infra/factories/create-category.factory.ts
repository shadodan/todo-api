import { CreateCategoryUseCase } from '../../use-cases/create-category.use-case';
import { PrismaCategoryRepository } from '../prisma/prisma-category.repository';

export function createCategoryFactory(): CreateCategoryUseCase {
  const repository = new PrismaCategoryRepository();

  return new CreateCategoryUseCase(repository);
}
