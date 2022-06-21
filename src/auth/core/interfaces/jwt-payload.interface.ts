import { User } from '../../../modules/user/core/entities/user.entity';

export interface JwtPayloadInterface {
  sub: {
    user: User;
  };
}
