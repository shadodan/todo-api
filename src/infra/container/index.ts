import { container } from 'tsyringe';

import { IEncoderProvider } from '../providers/encoder/encoder.provider';
import { IUserRepository } from '../../modules/user/core/repositories/user.repository';
import { PrismaUserRepository } from '../../modules/user/infra/prisma/prisma-user.repository';
import { BcryptEncoderProvider } from '../providers/encoder/implementations/bcrypt-encoder.provider';

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
