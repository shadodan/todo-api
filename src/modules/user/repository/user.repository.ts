import { Injectable } from '@nestjs/common';

import { IUserDTO } from '../dto/user.dto';
import { PrismaService } from '../../../database/prisma.service';

@Injectable()
export class UserRepository {
  constructor(private prisma: PrismaService) {}

  async create(data: IUserDTO): Promise<void> {
    await this.prisma.user.create({ data });
  }

  async list(): Promise<IUserDTO[]> {
    return this.prisma.user.findMany({ where: { deletedAt: null } });
  }

  async findById(id: string): Promise<IUserDTO> {
    return this.prisma.user.findFirst({
      where: { id, deletedAt: null },
    });
  }

  async update(id: string, data: IUserDTO): Promise<void> {
    await this.prisma.user.update({ where: { id }, data });
  }

  async delete(id: string): Promise<void> {
    await this.prisma.user.update({
      where: { id },
      data: { deletedAt: new Date() },
    });
  }
}
