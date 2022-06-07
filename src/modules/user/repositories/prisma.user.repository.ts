import { Injectable } from '@nestjs/common';

import { UpdateUserDTO, UserDTO } from '../dto/user.dto';
import { UserRepository } from './user.repository';
import { PrismaService } from '../../../database/prisma.service';

@Injectable()
export class PrismaUserRepository implements UserRepository {
  constructor(private prisma: PrismaService) {}

  async create(data: UserDTO): Promise<void> {
    await this.prisma.user.create({ data });
  }

  async list(): Promise<UserDTO[]> {
    return this.prisma.user.findMany();
  }

  async findById(id: string): Promise<UserDTO> {
    return this.prisma.user.findFirst({ where: { id } });
  }

  async update(id: string, data: UpdateUserDTO): Promise<void> {
    await this.prisma.user.update({ where: { id }, data });
  }

  async delete(id: string): Promise<void> {
    await this.prisma.user.delete({ where: { id } });
  }
}
