import { RecoverPasswordService } from '../../application/services/recover-password.service';
import { PrismaUserRepository } from '../../../modules/user/infra/prisma/prisma-user.repository';
import { JsonwebtokenJwtProvider } from '../../../infra/providers/jwt/jsonwebtoken-jwt.provider';
import { NodemailerEmailProvider } from '../../../infra/providers/email/nodemailer-email.provider';

export function recoverPasswordFactory(): RecoverPasswordService {
  const userRepository = new PrismaUserRepository();

  const jwtProvider = new JsonwebtokenJwtProvider();

  const emailProvider = new NodemailerEmailProvider();

  return new RecoverPasswordService(userRepository, jwtProvider, emailProvider);
}
