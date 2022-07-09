import { prisma } from '../../../../infra/database/prisma/client';
import { ICategoryRepository } from '../../core/repositories/category.repository';
import { Category } from '../../core/entities/category.entity';

export class PrismaCategoryRepository implements ICategoryRepository {
  private repository = prisma.category;

  async create(data: Category): Promise<void> {
    await this.repository.create({ data });
  }

  async findAllByUser(userId: string): Promise<Category[]> {
    return this.repository.findMany({ where: { userId } });
  }

  async findOne(id: string, userId: string): Promise<Category | null> {
    return this.repository.findFirst({ where: { id, userId } });
  }

  async update(id: string, data: Partial<Category>): Promise<void> {
    await this.repository.update({ where: { id }, data });
  }

  async remove(id: string): Promise<void> {
    await this.repository.delete({ where: { id } });
  }
}
