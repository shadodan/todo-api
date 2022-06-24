import { User } from '../../../modules/user/core/entities/user.entity';
import { IJwtPayload } from '../../../auth/core/interfaces/jwt-payload.interface';

export interface IJwtProvider {
  sign(user: User, expirationTime?: string): Promise<string>;

  verify(token: string): IJwtPayload;
}
