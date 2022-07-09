import { FindAllCriticalityLevelUseCase } from '../../use-cases/find-all-criticality-level.use-case';
import { PrismaCriticalityLevelRepository } from '../prisma/prisma-criticality-level.repository';

export function findAllCriticalityLevelFactory(): FindAllCriticalityLevelUseCase {
  const repository = new PrismaCriticalityLevelRepository();

  return new FindAllCriticalityLevelUseCase(repository);
}
