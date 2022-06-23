import { IUpdateUserDto } from '../dto/update-user.dto';
import { User } from '../../core/entities/user.entity';

export function updateUserValidator(
  id: string,
  data: IUpdateUserDto,
  user: User
): boolean {
  let isValidated = true;

  // Only the authenticated user can update itself
  if (user.id !== id) {
    isValidated = false;
  }

  // Excluded because they will have special services
  if (data.password || data.phone || data.email) {
    isValidated = false;
  }

  // Verifies if the username is passed, if it is then check its length
  if (data.username && data.username.trim().length > 255) {
    isValidated = false;
  }

  return isValidated;
}
