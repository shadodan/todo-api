import { IUpdateTaskDto } from '../dto/update-task.dto';
import { Task } from '../../core/entities/task.entity';
import { AppError } from '../../../../core/domain/errors/app.error';
import { UserToken } from '../../../../auth/core/interfaces/user-token';
import { Category } from '../../../category/core/entities/category.entity';

export function updateTaskValidator(
  {
    title,
    description,
    category: categoryToUpdate,
    deadline,
    criticalityLevel,
  }: IUpdateTaskDto,
  { ownerId }: Task,
  category: Category | null,
  criticalityIds: string[],
  { id: loggedUserId }: UserToken
): void {
  // Criticality level validation
  if (criticalityLevel && !criticalityIds.includes(criticalityLevel.id)) {
    throw new AppError('Invalid criticality level');
  }

  // Deadline validation
  if (deadline && deadline < new Date()) {
    throw new AppError('Invalid deadline');
  }

  // Title validation
  if (title && title.trim().length > 255) {
    throw new AppError('Invalid title');
  }

  // Description validation
  if (description && description.trim().length > 255) {
    throw new AppError('Invalid description');
  }

  // Category validation
  if (categoryToUpdate && !category) {
    throw new AppError('Invalid category');
  }

  // Authentication validation
  if (loggedUserId !== ownerId) {
    throw new AppError("You cannot change another user's task", 403);
  }
}
