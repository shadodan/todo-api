import { LoginService } from '../../application/services/login.service';
import { PrismaUserRepository } from '../../../modules/user/infra/prisma/prisma-user.repository';
import { BcryptEncoderProvider } from '../../../infra/providers/encoder/bcrypt-encoder.provider';
import { JsonwebtokenJwtProvider } from '../../../infra/providers/jwt/jsonwebtoken-jwt.provider';

export function loginFactory(): LoginService {
  const userRepository = new PrismaUserRepository();

  const encoderProvider = new BcryptEncoderProvider();

  const jwtProvider = new JsonwebtokenJwtProvider();

  return new LoginService(userRepository, encoderProvider, jwtProvider);
}
