import { IToken } from '../../auth/core/interfaces/token.interface';

declare global {
  namespace Express {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    export interface Request {
      token: IToken;
    }
  }
}
