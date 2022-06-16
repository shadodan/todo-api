import { Module } from '@nestjs/common';

import { UserService } from './user.service';
import { UserController } from './user.controller';
import { PrismaService } from '../database/prisma.service';
import { BcryptEncoderProvider } from '../providers/bcrypt.encoder.provider';

@Module({
  controllers: [UserController],
  providers: [PrismaService, UserService, BcryptEncoderProvider],
})
export class UserModule {}
