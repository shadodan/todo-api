import { ChangeForgottenPasswordService } from '../../application/services/change-forgotten-password.service';
import { PrismaUserRepository } from '../../../modules/user/infra/prisma/prisma-user.repository';
import { BcryptEncoderProvider } from '../../../infra/providers/encoder/bcrypt-encoder.provider';
import { JsonwebtokenJwtProvider } from '../../../infra/providers/jwt/jsonwebtoken-jwt.provider';

export function changeForgottenPasswordFactory(): ChangeForgottenPasswordService {
  const userRepository = new PrismaUserRepository();

  const encoderProvider = new BcryptEncoderProvider();

  const jwtProvider = new JsonwebtokenJwtProvider();

  return new ChangeForgottenPasswordService(
    userRepository,
    encoderProvider,
    jwtProvider
  );
}
