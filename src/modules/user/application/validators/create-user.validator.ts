import { CreateUserDto } from '../dto/create-user.dto';

// TODO: VERIFY IF VALIDATIONS ARE WORKING
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
  const emailRegex =
    /^[a-zA-Z0-9.! #$%&'*+/=? ^_`{|}~-]+@[a-zA-Z0-9-]+(?:\. [a-zA-Z0-9-]+)*$/;

  if (!email || emailRegex.test(email.trim()) || email.trim().length > 255) {
    return false;
  }

  // Phone validation
  const phoneRegex =
    /\(?\+[0-9]{1,3}\)? ?-?[0-9]{1,3} ?-?[0-9]{3,5} ?-?[0-9]{4}( ?-?[0-9]{3})? ?(\w{1,10}\s?\d{1,6})?/;

  if (!phone || phoneRegex.test(phone) || phone.trim().length > 255) {
    return false;
  }

  // Password validation
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*]).{8,}$/;

  if (
    !password ||
    passwordRegex.test(password) ||
    password.trim().length > 255
  ) {
    return false;
  }

  return true;
}
