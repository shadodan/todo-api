import { Module } from '@nestjs/common';

import { UserController } from './user.controller';
import { ListUserService } from './services/list.user.service';
import { FindUserService } from './services/find.user.service';
import { CreateUserService } from './services/create.user.service';
import { UpdateUserService } from './services/update.user.service';
import { DeleteUserService } from './services/delete.user.service';
import { PrismaService } from '../../database/prisma.service';
import { UserRepository } from './repository/user.repository';
import { BcryptEncoderProvider } from '../../providers/bcrypt.encoder.provider';

@Module({
  controllers: [UserController],
  providers: [
    PrismaService,
    UserRepository,
    CreateUserService,
    ListUserService,
    FindUserService,
    UpdateUserService,
    DeleteUserService,
    BcryptEncoderProvider,
  ],
})
export class UserModule {}
