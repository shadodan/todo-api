import { ITaskRepository } from '../core/repositories/task.repository';
import { removeTaskValidator } from '../application/validators/remove-task.validator';
import { DomainError } from '../../../core/domain/errors/domain.error';
import { UserToken } from '../../../auth/core/interfaces/user-token';

export class RemoveTaskUseCase {
  constructor(private taskRepository: ITaskRepository) {}

  async execute(id: string, user: UserToken): Promise<void> {
    const task = await this.taskRepository.findById(id, user.id);

    if (!task) {
      throw new DomainError('Task not found');
    }

    removeTaskValidator(user, task);

    await this.taskRepository.remove(id);
  }
}
