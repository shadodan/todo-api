import { ICreateUserDto } from '../dto/create-user.dto';
import { DomainError } from '../../../../core/domain/errors/domain.error';
import { AppError } from '../../../../core/domain/errors/app.error';

export function createUserValidator({
  email,
  phone,
  password,
  username,
  image,
}: ICreateUserDto): void {
  // Email validation
  if (!email || !email.includes('@') || email.trim().length > 255) {
    throw new DomainError('Invalid email');
  }

  // Phone validation
  if (!phone || phone.trim().length > 255) {
    throw new DomainError('Invalid phone');
  }

  // Password validation
  if (
    !password ||
    !/[a-z]/.test(password) ||
    !/[A-Z]/.test(password) ||
    !/\d/.test(password) ||
    !/[!@#$%^&*.,\/+{\[\]\-;´`~<>}\\?_=§()|]/.test(password) ||
    password.length < 8 ||
    password.trim().length > 255
  ) {
    throw new DomainError(
      'Invalid password, your password is not secure, make sure that it has a special character, a number, a uppercase letter, lowercase letter and length of 8 characters'
    );
  }

  // Username validation
  if (!username || username.trim().length > 255) {
    throw new DomainError('Invalid username');
  }

  // Image validation
  if (image && image.trim().length > 255) {
    throw new AppError('Invalid image', 415);
  }
}
