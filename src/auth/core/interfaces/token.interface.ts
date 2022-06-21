import { User } from '../../../modules/user/core/entities/user.entity';

export interface TokenInterface {
  sub: {
    user: User;
  };
}
