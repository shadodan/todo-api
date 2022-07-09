import { prisma } from '../../../../infra/database/prisma/client';
import { ITaskRepository } from '../../core/repositories/task.repository';
import { Task } from '../../core/entities/task.entity';

export class PrismaCategoryRepository implements ITaskRepository {
  private repository = prisma.category;

  async create(data: Task): Promise<void> {
    await this.repository.create({ data });
  }

  async findAllByUser(userId: string): Promise<Task[]> {
    return this.repository.findMany({ where: { userId } });
  }

  async findOne(id: string, userId: string): Promise<Task | null> {
    return this.repository.findFirst({ where: { id, userId } });
  }

  async update(id: string, data: Partial<Task>): Promise<void> {
    await this.repository.update({ where: { id }, data });
  }

  async remove(id: string): Promise<void> {
    await this.repository.delete({ where: { id } });
  }
}
