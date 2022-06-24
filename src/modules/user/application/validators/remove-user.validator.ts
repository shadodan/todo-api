import { UserToken } from '../../../../auth/core/interfaces/user-token';
import { DomainError } from '../../../../core/domain/errors/domain.error';

export function removeUserValidator(id: string, user: UserToken): void {
  // Only the authenticated user can delete itself
  if (user.id !== id) {
    throw new DomainError('You cannot delete another user');
  }
}
