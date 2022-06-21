import { container } from 'tsyringe';

import { IEncoderProvider } from '../../core/application/providers/encoder.provider';
import { IUserRepository } from '../../modules/user/core/repositories/user.repository';
import { PrismaUserRepository } from '../../modules/user/infra/prisma/prisma-user.repository';
import { BcryptEncoderProvider } from '../providers/encoder/bcrypt-encoder.provider';
import { IJwtProvider } from '../../core/application/providers/jwt.provider';
import { JsonwebtokenJwtProvider } from '../providers/jwt/jsonwebtoken-jwt.provider';

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
