import { IUpdateUserDto } from '../dto/update-user.dto';
import { AppError } from '../../../../core/domain/errors/app.error';
import { UserToken } from '../../../../auth/core/interfaces/user-token';
import { DomainError } from '../../../../core/domain/errors/domain.error';

export function updateUserValidator(
  id: string,
  { email, username, password, image, phone }: IUpdateUserDto,
  { id: loggedUserId }: UserToken
): void {
  // Only the authenticated user can update itself
  if (loggedUserId !== id) {
    throw new DomainError('You cannot update another user');
  }

  // Excluded because they will have special use-cases
  if (password || phone || email) {
    throw new AppError('Invalid inputs, try another method', 303);
  }

  // Verifies if the username is passed, if it is then check its length
  if (username && username.trim().length > 255) {
    throw new DomainError('Invalid username');
  }

  // Image validation
  if (image && image.trim().length > 255) {
    throw new AppError('Invalid image', 415);
  }
}
