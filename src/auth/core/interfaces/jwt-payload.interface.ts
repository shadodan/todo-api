import { User } from '../../../modules/user/core/entities/user.entity';

export interface IJwtPayload {
  sub: {
    user: User;
  };
}
