import { CriticalityLevelEntity } from '../entities/criticality-level.entity';

export interface ICriticalityLevelRepository {
  findAll(): Promise<CriticalityLevelEntity[]>;

  findOne(id: string): Promise<CriticalityLevelEntity | null>;

  findCriticalityIds(): Promise<string[]>;
}
