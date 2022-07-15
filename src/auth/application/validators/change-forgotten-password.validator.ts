import { DomainError } from '../../../core/domain/errors/domain.error';

export function changeForgottenPasswordValidator(
  password: string,
  passwordVerification: string
): void {
  // Verifies if it sent the password
  if (!password || !passwordVerification) {
    throw new DomainError('Missing required arguments');
  }

  // Verifies if it is a strong password
  if (
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

  // Verifies if the passwords match
  if (password !== passwordVerification) {
    throw new DomainError('Passwords do not match');
  }
}
