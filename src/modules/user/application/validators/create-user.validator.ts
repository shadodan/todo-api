import { ICreateUserDto } from '../dto/create-user.dto';

export function createUserValidator({
  email,
  phone,
  password,
  username,
}: ICreateUserDto): boolean {
  let isValidated = true;

  // Email validation
  if (!email || !email.includes('@') || email.trim().length > 255) {
    isValidated = false;
  }

  // Phone validation
  if (!phone || phone.trim().length > 255) {
    isValidated = false;
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
    isValidated = false;
  }

  // Username validation
  if (!username || username.trim().length > 255) {
    isValidated = false;
  }

  return isValidated;
}
