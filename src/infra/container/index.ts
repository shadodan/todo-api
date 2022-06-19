import { container } from 'tsyringe';

import { IUserRepository } from '../../modules/user/domain/repositories/user.repository';
import { PrismaUserRepository } from '../../modules/user/infra/prisma/prisma-user.repository';

container.registerSingleton<IUserRepository>(
  'UserRepository',
  PrismaUserRepository
);
