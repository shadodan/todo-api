import { RecoverPasswordBySmsUseCase } from '../../use-cases/recover-password-by-sms.use-case';
import { PrismaUserRepository } from '../../../modules/user/infra/prisma/prisma-user.repository';
import { JsonwebtokenJwtProvider } from '../../../infra/providers/jwt/jsonwebtoken-jwt.provider';
import { TwilioSmsProvider } from '../../../infra/providers/sms/twilio-sms.provider';

export function recoverPasswordBySmsFactory(): RecoverPasswordBySmsUseCase {
  const userRepository = new PrismaUserRepository();

  const jwtProvider = new JsonwebtokenJwtProvider();

  const smsProvider = new TwilioSmsProvider();

  return new RecoverPasswordBySmsUseCase(
    userRepository,
    jwtProvider,
    smsProvider
  );
}
