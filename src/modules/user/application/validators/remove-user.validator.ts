import { UserToken } from '../../../../auth/core/interfaces/user-token';
import { DomainError } from '../../../../core/domain/errors/domain.error';

export function removeUserValidator(
  id: string,
  { id: loggedUserId }: UserToken
): void {
  // Only the authenticated user can delete itself
  if (loggedUserId !== id) {
    throw new DomainError('You cannot delete another user');
  }
}
