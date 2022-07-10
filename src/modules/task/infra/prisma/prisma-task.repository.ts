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
        description: data.description,
        title: data.title,
        deadline: data.deadline ? new Date(data.deadline) : undefined,
        isFinished: data.isFinished,
        owner: { connect: { id: data.ownerId } },
        category: { connect: { id: data.categoryId } },
        project: { connect: undefined },
        criticalityLevel: { connect: { id: data.criticalityLevelId } },
      },
    });
  }

  async findAllByUser(
    findOptions: FindByParamsOptions,
    userId: string
  ): Promise<Task[]> {
    let where = {};

    for (const findOption of Object.entries(findOptions)) {
      where = { [findOption[0]]: findOption[1] };
    }

    return this.repository.findMany({ where: { ownerId: userId, ...where } });
  }

  async findOne(id: string, userId: string): Promise<Task | null> {
    return this.repository.findFirst({ where: { id, ownerId: userId } });
  }

  async update(id: string, data: Partial<Task>): Promise<void> {
    await this.repository.update({ where: { id }, data });
  }

  async remove(id: string): Promise<void> {
    await this.repository.delete({ where: { id } });
  }
}
