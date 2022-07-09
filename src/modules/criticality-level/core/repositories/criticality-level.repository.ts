import { CriticalityLevel } from '../entities/criticality-level.entity';

export interface ICriticalityLevelRepository {
  findAll(): Promise<CriticalityLevel[]>;

  findOne(id: string): Promise<CriticalityLevel | null>;

  findCriticalityLevelIds(): Promise<string[]>;
}
