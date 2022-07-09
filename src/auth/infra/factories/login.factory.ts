import { LoginUseCase } from '../../use-cases/login.use-case';
import { PrismaUserRepository } from '../../../modules/user/infra/prisma/prisma-user.repository';
import { BcryptEncoderProvider } from '../../../infra/providers/encoder/bcrypt-encoder.provider';
import { JsonwebtokenJwtProvider } from '../../../infra/providers/jwt/jsonwebtoken-jwt.provider';

export function loginFactory(): LoginUseCase {
  const userRepository = new PrismaUserRepository();

  const encoderProvider = new BcryptEncoderProvider();

  const jwtProvider = new JsonwebtokenJwtProvider();

  return new LoginUseCase(userRepository, encoderProvider, jwtProvider);
}
