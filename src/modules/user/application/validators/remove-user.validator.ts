import { UserToken } from '../../../../auth/core/interfaces/user-token';

export function removeUserValidator(id: string, user: UserToken): boolean {
  let isValidated = true;

  // Only the authenticated user can delete itself
  if (user.id !== id) {
    isValidated = false;
  }

  return isValidated;
}
