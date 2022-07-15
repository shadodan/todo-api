import { Category } from '../../core/entities/category.entity';
import { AppError } from '../../../../core/domain/errors/app.error';
import { UserToken } from '../../../../auth/core/interfaces/user-token';

export function removeCategoryValidator(
  { id: loggedUserId }: UserToken,
  { userId }: Category
): void {
  // Authentication validation
  if (loggedUserId !== userId) {
    throw new AppError("You cannot remove another user's category", 403);
  }
}
