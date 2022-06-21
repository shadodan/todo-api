import { sign, verify } from 'jsonwebtoken';
import { injectable } from 'tsyringe';

import auth from '../../../config/auth';
import { User } from '../../../modules/user/core/entities/user.entity';
import { IJwtAuthProvider } from '../../../core/application/providers/jwt-auth.provider';
import { JwtPayloadInterface } from '../../../auth/core/interfaces/jwt-payload.interface';

@injectable()
export class JsonwebtokenJwtAuthProvider implements IJwtAuthProvider {
  private authConfig = auth();

  async sign(user: User): Promise<string> {
    const payload: JwtPayloadInterface = { sub: { user } };

    return sign(payload, this.authConfig.JWT_SECRET, {
      expiresIn: this.authConfig.JWT_EXPIRATION,
    });
  }

  async verify(token: string): Promise<JwtPayloadInterface> {
    return verify(
      token,
      this.authConfig.JWT_SECRET
    ) as unknown as JwtPayloadInterface;
  }
}
