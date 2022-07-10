import { ITaskRepository } from '../core/repositories/task.repository';
import { Task } from '../core/entities/task.entity';
import { DomainError } from '../../../core/domain/errors/domain.error';
import { UserToken } from '../../../auth/core/interfaces/user-token';

type FindOneTaskResponse = Task;

export class FindOneTaskUseCase {
  constructor(private taskRepository: ITaskRepository) {}

  async execute(id: string, user: UserToken): Promise<FindOneTaskResponse> {
    const task = await this.taskRepository.findOne(id, user.id);

    if (!task) {
      throw new DomainError('Task not found');
    }

    return {
      title: task.title,
      criticalityLevelId: task.criticalityLevelId,
      categoryId: task.categoryId,
      projectId: task.projectId,
      isFinished: task.isFinished,
      deadline: task.deadline,
      description: task.description,
      createdAt: task.createdAt,
      updatedAt: task.updatedAt,
    } as FindOneTaskResponse;
  }
}
