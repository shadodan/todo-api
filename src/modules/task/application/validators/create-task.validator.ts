import { ICreateTaskDto } from '../dto/create-task.dto';
import { AppError } from '../../../../core/domain/errors/app.error';
import { Category } from '../../../category/core/entities/category.entity';
import { DomainError } from '../../../../core/domain/errors/domain.error';

export function createTaskValidator(
  {
    criticalityLevel: { id: criticalityId },
    deadline,
    title,
    description,
    category: { id: categoryId },
  }: ICreateTaskDto,
  category: Category | null,
  criticalityIds: string[]
): void {
  // Criticality level validation
  if (!criticalityId && !criticalityIds.includes(criticalityId)) {
    throw new DomainError('Invalid criticality level');
  }

  // Deadline validation
  if (!deadline || deadline < new Date()) {
    throw new AppError('Invalid deadline');
  }

  // Title validation
  if (!title || title.trim().length > 255) {
    throw new AppError('Invalid title');
  }

  // Description validation
  if (description && description.trim().length > 255) {
    throw new AppError('Invalid description');
  }

  // Category validation
  if (!categoryId || !category) {
    throw new DomainError('Invalid category');
  }
}
