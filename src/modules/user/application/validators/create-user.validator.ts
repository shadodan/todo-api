import { CreateUserDto } from '../dto/create-user.dto';

export function createUserValidator({
  username,
  email,
  phone,
  password,
}: CreateUserDto): boolean {
  // Username validation
  if (!username || username.trim().length > 255) {
    return false;
  }

  // Email validation
  if (!email || !email.includes('@') || email.trim().length > 255) {
    return false;
  }

  // Phone validation
  if (!phone || phone.trim().length > 255) {
    return false;
  }

  // Password validation
  if (
    !password ||
    !/[a-z]/.test(password) ||
    !/[A-Z]/.test(password) ||
    !/\d/.test(password) ||
    !/[!@#$%^&*]/.test(password) ||
    password.length < 8 ||
    password.trim().length > 255
  ) {
    return false;
  }

  return true;
}
