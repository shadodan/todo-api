import { User } from '../../core/entities/user.entity';
import { prisma } from '../../../../infra/database/prisma/client';
import { IUserRepository } from '../../core/repositories/user.repository';
import { IFindAllUserResponse } from '../../core/interfaces/find-all-user-response.interface';
import { IFindOneUserResponse } from '../../core/interfaces/find-one-user-response.interface';

export class PrismaUserRepository implements IUserRepository {
  private repository = prisma.user;

  async create(data: User): Promise<void> {
    await this.repository.create({ data });
  }

  async findAll(): Promise<IFindAllUserResponse[]> {
    return this.repository.findMany() as unknown as IFindAllUserResponse[];
  }

  async findOne(id: string): Promise<IFindOneUserResponse | null> {
    return this.repository.findUnique({
      where: { id },
    }) as unknown as IFindOneUserResponse | null;
  }

  async update(id: string, data: User): Promise<void> {
    await this.repository.update({ where: { id }, data });
  }

  async remove(id: string): Promise<void> {
    await this.repository.delete({ where: { id } });
  }

  async findByEmail(email: string): Promise<User | null> {
    return this.repository.findUnique({ where: { email } });
  }

  async findByPhone(phone: string): Promise<User | null> {
    return this.repository.findUnique({ where: { phone } });
  }
}
