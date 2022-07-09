import { ChangeForgottenPasswordUseCase } from '../../use-cases/change-forgotten-password.use-case';
import { PrismaUserRepository } from '../../../modules/user/infra/prisma/prisma-user.repository';
import { BcryptEncoderProvider } from '../../../infra/providers/encoder/bcrypt-encoder.provider';
import { JsonwebtokenJwtProvider } from '../../../infra/providers/jwt/jsonwebtoken-jwt.provider';

export function changeForgottenPasswordFactory(): ChangeForgottenPasswordUseCase {
  const userRepository = new PrismaUserRepository();

  const encoderProvider = new BcryptEncoderProvider();

  const jwtProvider = new JsonwebtokenJwtProvider();

  return new ChangeForgottenPasswordUseCase(
    userRepository,
    encoderProvider,
    jwtProvider
  );
}
