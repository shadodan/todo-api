import { Module } from '@nestjs/common';

import { UserController } from './user.controller';
import { PrismaService } from '../../database/prisma.service';
import { ListUserService } from './services/list.user.service';
import { FindUserService } from './services/find.user.service';
import { CreateUserService } from './services/create.user.service';
import { UpdateUserService } from './services/update.user.service';
import { DeleteUserService } from './services/delete.user.service';
import { PrismaUserRepository } from './repositories/prisma.user.repository';
import { BcryptEncoderProvider } from '../../providers/bcrypt.encoder.provider';

@Module({
  controllers: [UserController],
  providers: [
    PrismaService,
    PrismaUserRepository,
    CreateUserService,
    ListUserService,
    FindUserService,
    UpdateUserService,
    DeleteUserService,
    BcryptEncoderProvider,
  ],
})
export class UserModule {}
