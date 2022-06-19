import { injectable } from 'tsyringe';

import { prisma } from '../../../../infra/prisma/client';
import { CreateUserDto } from '../../dto/create-user.dto';
import { UpdateUserDto } from '../../dto/update-user.dto';
import { User } from '../../../../core/domain/entities/user.entity';
import { IUserRepository } from '../../../../core/domain/repositories/user.repository';

@injectable()
export class PrismaUserRepository implements IUserRepository {
  private repository = prisma.user;

  async create(data: CreateUserDto): Promise<void> {
    const user = new User();

    Object.assign(user, { ...data });

    await this.repository.create({ data: user });
  }

  async findAll(): Promise<User[]> {
    return this.repository.findMany();
  }

  async findOne(id: string): Promise<User | null> {
    return this.repository.findUnique({ where: { id } });
  }

  async update(id: string, data: UpdateUserDto): Promise<void> {
    await this.repository.update({ where: { id }, data });
  }

  async remove(id: string): Promise<void> {
    await this.repository.delete({ where: { id } });
  }
}
