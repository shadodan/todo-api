import { CreateUserDto } from '../dto/create-user.dto';

// TODO: VERIFY IF VALIDATIONS ARE WORKING
export function createUserValidator({
  email,
  username,
  password,
  phone,
}: CreateUserDto): boolean {
  // Email validation
  if (
    !email ||
    /^[a-zA-Z0-9.! #$%&'*+/=? ^_`{|}~-]+@[a-zA-Z0-9-]+(?:\. [a-zA-Z0-9-]+)*$/.test(
      email.trim()
    ) ||
    email.trim().length > 255
  ) {
    return false;
  }

  // Username validation
  if (!username || username.trim().length > 255) {
    return false;
  }

  // Password validation
  if (
    !password ||
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*]).{8,}$/.test(
      password
    ) ||
    password.trim().length > 255
  ) {
    return false;
  }

  // Phone validation
  if (
    !phone ||
    /\(?\+[0-9]{1,3}\)? ?-?[0-9]{1,3} ?-?[0-9]{3,5} ?-?[0-9]{4}( ?-?[0-9]{3})? ?(\w{1,10}\s?\d{1,6})?/.test(
      phone
    ) ||
    phone.trim().length > 255
  ) {
    return false;
  }

  return true;
}
