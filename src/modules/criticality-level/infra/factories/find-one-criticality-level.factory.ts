import { PrismaCriticalityLevelRepository } from '../prisma/prisma-criticality-level.repository';
import { FindOneCriticalityLevelUseCase } from '../../use-cases/find-one-criticality-level.use-case';

export function findOneCriticalityLevelFactory(): FindOneCriticalityLevelUseCase {
  const repository = new PrismaCriticalityLevelRepository();

  return new FindOneCriticalityLevelUseCase(repository);
}
