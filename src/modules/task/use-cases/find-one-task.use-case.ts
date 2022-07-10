import { ITaskRepository } from '../core/repositories/task.repository';
import { DomainError } from '../../../core/domain/errors/domain.error';
import { UserToken } from '../../../auth/core/interfaces/user-token';
import { IFindOneTaskResponse } from '../core/interfaces/find-one-task-response.interface';

export class FindOneTaskUseCase {
  constructor(private taskRepository: ITaskRepository) {}

  async execute(id: string, user: UserToken): Promise<IFindOneTaskResponse> {
    const task = await this.taskRepository.findOne(id, user.id);

    if (!task) {
      throw new DomainError('Task not found');
    }

    return task;
  }
}
