import { Allow } from 'class-validator';

export interface UserDTO {
  id: string;
  username: string;
  email: string;
  password: string;
  phone: string;
  image: string;
}

export class UpdateUserDTO {
  @Allow()
  image: string;

  @Allow()
  username: string;
}
