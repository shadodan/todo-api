import { IUpdateUserDto } from '../dto/update-user.dto';
import { AppError } from '../../../../core/domain/errors/app.error';
import { UserToken } from '../../../../auth/core/interfaces/user-token';
import { DomainError } from '../../../../core/domain/errors/domain.error';

export function updateUserValidator(
  id: string,
  data: IUpdateUserDto,
  user: UserToken
): void {
  // Only the authenticated user can update itself
  if (user.id !== id) {
    throw new DomainError('You cannot update another user');
  }

  // Excluded because they will have special services
  if (data.password || data.phone || data.email) {
    throw new AppError('Invalid inputs, try another method', 303);
  }

  // Verifies if the username is passed, if it is then check its length
  if (data.username && data.username.trim().length > 255) {
    throw new DomainError('Invalid username');
  }
}
