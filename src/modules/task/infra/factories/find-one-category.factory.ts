import { FindOneCategoryUseCase } from '../../use-cases/find-one-category.use-case';
import { PrismaCategoryRepository } from '../prisma/prisma-category.repository';

export function findOneCategoryFactory(): FindOneCategoryUseCase {
  const repository = new PrismaCategoryRepository();

  return new FindOneCategoryUseCase(repository);
}
