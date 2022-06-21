import { sign, verify } from 'jsonwebtoken';
import { injectable } from 'tsyringe';

import jwtAuth from '../../../config/jwt-auth';
import { User } from '../../../modules/user/core/entities/user.entity';
import { IJwtAuthProvider } from '../../../core/application/providers/jwt-auth.provider';
import { JwtPayloadInterface } from '../../../auth/core/interfaces/jwt-payload.interface';

@injectable()
export class JsonwebtokenJwtAuthProvider implements IJwtAuthProvider {
  private jwtAuthConfig = jwtAuth();

  async sign(user: User): Promise<string> {
    const payload: JwtPayloadInterface = { sub: { user } };

    return sign(payload, this.jwtAuthConfig.JWT_SECRET, {
      expiresIn: this.jwtAuthConfig.JWT_EXPIRATION,
    });
  }

  verify(token: string): JwtPayloadInterface {
    return verify(
      token,
      this.jwtAuthConfig.JWT_SECRET
    ) as unknown as JwtPayloadInterface;
  }
}
