import { Category } from '../../core/entities/category.entity';
import { User } from '../../../user/core/entities/user.entity';
import { AppError } from '../../../../core/domain/errors/app.error';

export function removeCategoryValidator(
  { id: loggedUserId }: User,
  { user: { id: categoryOwnerId } }: Category
): void {
  // Authentication validation
  if (loggedUserId !== categoryOwnerId) {
    throw new AppError("You cannot change another user's category");
  }
}
