import { UserToken } from './user-token';

export interface IToken {
  sub: {
    user: UserToken;
  };
}
