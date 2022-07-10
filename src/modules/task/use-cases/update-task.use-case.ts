import { ITaskRepository } from '../core/repositories/task.repository';
import { IUpdateTaskDto } from '../application/dto/update-task.dto';
import { updateTaskValidator } from '../application/validators/update-task.validator';
import { DomainError } from '../../../core/domain/errors/domain.error';
import { UserToken } from '../../../auth/core/interfaces/user-token';
import { ICriticalityLevelRepository } from '../../criticality-level/core/repositories/criticality-level.repository';
import { ICategoryRepository } from '../../category/core/repositories/category.repository';

export class UpdateTaskUseCase {
  constructor(
    private taskRepository: ITaskRepository,
    private criticalityLevelRepository: ICriticalityLevelRepository,
    private categoryRepository: ICategoryRepository
  ) {}

  async execute(
    id: string,
    data: IUpdateTaskDto,
    user: UserToken
  ): Promise<void> {
    const task = await this.taskRepository.findOne(id, user.id);

    if (!task) {
      throw new DomainError('Task not found');
    }

    const category = data.category
      ? await this.categoryRepository.findOne(data.category.id, user.id)
      : null;

    const criticalityLevelIds =
      await this.criticalityLevelRepository.findCriticalityLevelIds();

    updateTaskValidator(data, task, category, criticalityLevelIds, user);

    await this.taskRepository.update(id, data);
  }
}
