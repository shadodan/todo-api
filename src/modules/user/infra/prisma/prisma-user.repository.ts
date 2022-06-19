import { injectable } from 'tsyringe';

import { User } from '../../domain/entities/user.entity';
import { prisma } from '../../../../infra/database/prisma/client';
import { IUserRepository } from '../../domain/repositories/user.repository';

@injectable()
export class PrismaUserRepository implements IUserRepository {
  private repository = prisma.user;

  async create(data: User): Promise<void> {
    await this.repository.create({ data });
  }

  async findAll(): Promise<User[]> {
    return this.repository.findMany();
  }

  async findOne(id: string): Promise<User | null> {
    return this.repository.findUnique({ where: { id } });
  }

  async update(id: string, data: User): Promise<void> {
    await this.repository.update({ where: { id }, data });
  }

  async remove(id: string): Promise<void> {
    await this.repository.delete({ where: { id } });
  }
}
