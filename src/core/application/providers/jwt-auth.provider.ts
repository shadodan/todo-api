import { User } from '../../../modules/user/core/entities/user.entity';
import { JwtPayloadInterface } from '../../../auth/core/interfaces/jwt-payload.interface';

export interface IJwtAuthProvider {
  sign(user: User): Promise<string>;

  verify(token: string): JwtPayloadInterface;
}
