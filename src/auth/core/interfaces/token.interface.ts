import { User } from '../../../modules/user/core/entities/user.entity';

export interface IToken {
  sub: {
    user: Omit<User, 'password' | 'createdAt' | 'updatedAt'>;
  };
}
