import { ICriticalityLevelRepository } from '../core/repositories/criticality-level.repository';
import { CriticalityLevelEntity } from '../core/entities/criticality-level.entity';

export class FindAllCriticalityLevelUseCase {
  constructor(
    private defaultCriticalityLevelRepository: ICriticalityLevelRepository
  ) {}

  async execute(): Promise<CriticalityLevelEntity[]> {
    return this.defaultCriticalityLevelRepository.findAll();
  }
}
