import { v4 as uuid } from 'uuid';
import { Injectable } from '@nestjs/common';

import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from '../database/prisma.service';
import { BcryptEncoderProvider } from '../providers/bcrypt.encoder.provider';

@Injectable()
export class UserService {
  constructor(
    private prisma: PrismaService,
    private encoderProvider: BcryptEncoderProvider
  ) {}

  async create(data: CreateUserDto) {
    const hashedPassword = await this.encoderProvider.encode(data.password);

    await this.prisma.user.create({
      data: {
        ...data,
        password: hashedPassword,
        id: uuid(),
      },
    });
  }

  async findAll() {
    return this.prisma.user.findMany();
  }

  async findOne(id: string) {
    const user = await this.prisma.user.findFirst({ where: { id } });

    if (!user) {
      throw new Error('User not found');
    }

    return user;
  }

  async update(id: string, data: UpdateUserDto) {
    await this.prisma.user.update({ where: { id }, data });
  }

  async remove(id: string) {
    await this.prisma.user.delete({ where: { id } });
  }
}
