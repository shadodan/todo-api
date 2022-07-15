import { UserToken } from './user-token';

export interface IJwtPayload {
  sub: {
    user: UserToken;
  };
}
