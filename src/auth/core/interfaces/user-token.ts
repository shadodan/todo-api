import { User } from '../../../modules/user/core/entities/user.entity';

export interface UserToken
  extends Omit<User, 'password' | 'createdAt' | 'updatedAt' | 'image'> {}
