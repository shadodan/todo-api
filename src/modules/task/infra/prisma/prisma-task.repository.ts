import { prisma } from '../../../../infra/database/prisma/client';
import {
  FindByParamsOptions,
  ITaskRepository,
} from '../../core/repositories/task.repository';
import { Task } from '../../core/entities/task.entity';

export class PrismaTaskRepository implements ITaskRepository {
  private repository = prisma.task;

  async create(data: Task): Promise<void> {
    await this.repository.create({
      data: {
        id: data.id,
        title: data.title,
        description: data.description ?? '',
        categoryId: data.categoryId,
        criticalityId: data.criticalityLevelId,
        criticality: { connect: { id: data.criticalityLevelId } },
        category: { connect: { id: data.categoryId } },
      },
    });
  }

  async findAllByUser(userId: string): Promise<Task[]> {
    return this.repository.findMany({ where: { userId } });
  }

  async findOne(id: string, userId: string): Promise<Task | null> {
    return this.repository.findFirst({ where: { id, userId } });
  }

  async findByParams(findOptions: FindByParamsOptions): Promise<Task[]> {
    return this.repository.findMany({ where: { id: findOptions.categoryId } });
  }

  async update(id: string, data: Partial<Task>): Promise<void> {
    await this.repository.update({ where: { id }, data });
  }

  async remove(id: string): Promise<void> {
    await this.repository.delete({ where: { id } });
  }
}
