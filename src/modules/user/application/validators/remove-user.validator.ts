import { User } from '../../core/entities/user.entity';

export function removeUserValidator(id: string, user: User): boolean {
  let isValidated = true;

  // Only the authenticated user can delete itself
  if (user.id !== id) {
    isValidated = false;
  }

  return isValidated;
}
