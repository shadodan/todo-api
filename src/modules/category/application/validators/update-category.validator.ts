import { IUpdateCategoryDto } from '../dto/update-category.dto';
import { Category } from '../../core/entities/category.entity';
import { AppError } from '../../../../core/domain/errors/app.error';
import { UserToken } from '../../../../auth/core/interfaces/user-token';

export function updateCategoryValidator(
  { name, colour }: IUpdateCategoryDto,
  { userId }: Category,
  { id: loggedUserId }: UserToken
): void {
  // Category name validation
  if (name && name.trim().length > 255) {
    throw new AppError('Invalid name');
  }

  // Colour validation
  if (colour && (colour.trim().length !== 7 || !colour.includes('#'))) {
    throw new AppError('Invalid colour');
  }

  // Authentication validation
  if (loggedUserId !== userId) {
    throw new AppError("You cannot change another user's category");
  }
}
