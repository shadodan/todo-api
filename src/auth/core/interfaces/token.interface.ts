import { User } from '../../../modules/user/core/entities/user.entity';

export interface IToken {
  sub: {
    user: User;
  };
}
