import { Category } from '../../../category/core/entities/category.entity';
import { CriticalityLevel } from '../../../criticality-level/core/entities/criticality-level.entity';

export interface ICreateTaskDto {
  category: Category;
  criticalityLevel: CriticalityLevel;
  title: string;
  description?: string;
  deadline?: Date;
}
