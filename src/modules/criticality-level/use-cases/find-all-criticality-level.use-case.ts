import { ICriticalityLevelRepository } from '../core/repositories/criticality-level.repository';
import { CriticalityLevel } from '../core/entities/criticality-level.entity';

export class FindAllCriticalityLevelUseCase {
  constructor(
    private defaultCriticalityLevelRepository: ICriticalityLevelRepository
  ) {}

  async execute(): Promise<CriticalityLevel[]> {
    return this.defaultCriticalityLevelRepository.findAll();
  }
}
