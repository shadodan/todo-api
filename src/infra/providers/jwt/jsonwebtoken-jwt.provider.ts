import { sign, verify } from 'jsonwebtoken';

import jwt from '../../../config/jwt';
import { User } from '../../../modules/user/core/entities/user.entity';
import { IJwtProvider } from '../../../core/application/providers/jwt.provider';
import { IJwtPayload } from '../../../auth/core/interfaces/jwt-payload.interface';

export class JsonwebtokenJwtProvider implements IJwtProvider {
  private jwtConfig = jwt();

  async sign(user: User, expirationTime?: string): Promise<string> {
    const payload: IJwtPayload = {
      sub: {
        user: {
          id: user.id,
          username: user.username,
          email: user.email,
          phone: user.phone,
        },
      },
    };

    return sign(payload, this.jwtConfig.JWT_SECRET, {
      expiresIn: expirationTime ?? this.jwtConfig.JWT_EXPIRATION,
    });
  }

  verify(token: string): IJwtPayload {
    return verify(token, this.jwtConfig.JWT_SECRET) as unknown as IJwtPayload;
  }
}
