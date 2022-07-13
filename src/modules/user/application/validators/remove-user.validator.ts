import { UserToken } from '../../../../auth/core/interfaces/user-token';
import { AppError } from '../../../../core/domain/errors/app.error';

export function removeUserValidator(
  id: string,
  { id: loggedUserId }: UserToken
): void {
  // Only the authenticated user can delete itself
  if (loggedUserId !== id) {
    throw new AppError('You cannot delete another user', 403);
  }
}
