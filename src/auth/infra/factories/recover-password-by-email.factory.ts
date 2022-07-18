import { RecoverPasswordByEmailUseCase } from '../../use-cases/recover-password-by-email.use-case';
import { PrismaUserRepository } from '../../../modules/user/infra/prisma/prisma-user.repository';
import { JsonwebtokenJwtProvider } from '../../../infra/providers/jwt/jsonwebtoken-jwt.provider';
import { NodemailerEmailProvider } from '../../../infra/providers/email/nodemailer-email.provider';

export function recoverPasswordByEmailFactory(): RecoverPasswordByEmailUseCase {
  const userRepository = new PrismaUserRepository();

  const jwtProvider = new JsonwebtokenJwtProvider();

  const emailProvider = new NodemailerEmailProvider();

  return new RecoverPasswordByEmailUseCase(
    userRepository,
    jwtProvider,
    emailProvider
  );
}
