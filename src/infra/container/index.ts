import { container } from 'tsyringe';

import { IJwtProvider } from '../../core/application/providers/jwt.provider';
import { IEmailProvider } from '../../core/application/providers/email.provider';
import { IEncoderProvider } from '../../core/application/providers/encoder.provider';
import { BcryptEncoderProvider } from '../providers/encoder/bcrypt-encoder.provider';
import { JsonwebtokenJwtProvider } from '../providers/jwt/jsonwebtoken-jwt.provider';
import { NodemailerEmailProvider } from '../providers/email/nodemailer-email.provider';
import { IUserRepository } from '../../modules/user/core/repositories/user.repository';
import { PrismaUserRepository } from '../../modules/user/infra/prisma/prisma-user.repository';

// Repositories
container.registerSingleton<IUserRepository>(
  'UserRepository',
  PrismaUserRepository
);

// Providers
container.registerSingleton<IEncoderProvider>(
  'EncoderProvider',
  BcryptEncoderProvider
);

container.registerSingleton<IJwtProvider>(
  'JwtProvider',
  JsonwebtokenJwtProvider
);

container.registerSingleton<IEmailProvider>(
  'EmailProvider',
  NodemailerEmailProvider
);
