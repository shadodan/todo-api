import { container } from 'tsyringe';

import { IEncoderProvider } from '../../core/application/providers/encoder.provider';
import { IUserRepository } from '../../modules/user/core/repositories/user.repository';
import { PrismaUserRepository } from '../../modules/user/infra/prisma/prisma-user.repository';
import { BcryptEncoderProvider } from '../providers/encoder/bcrypt-encoder.provider';
import { IJwtAuthProvider } from '../../core/application/providers/jwt-auth.provider';
import { JsonwebtokenJwtAuthProvider } from '../providers/jwt-auth/jsonwebtoken-jwt-auth.provider';

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

container.registerSingleton<IJwtAuthProvider>(
  'JwtAuthProvider',
  JsonwebtokenJwtAuthProvider
);
