import { Task } from '../core/entities/task.entity';
import { ICreateTaskDto } from '../application/dto/create-task.dto';
import { ITaskRepository } from '../core/repositories/task.repository';
import { createTaskValidator } from '../application/validators/create-task.validator';
import { UserToken } from '../../../auth/core/interfaces/user-token';
import { ICriticalityLevelRepository } from '../../criticality-level/core/repositories/criticality-level.repository';
import { ICategoryRepository } from '../../category/core/repositories/category.repository';

export class CreateTaskUseCase {
  constructor(
    private taskRepository: ITaskRepository,
    private criticalityLevelRepository: ICriticalityLevelRepository,
    private categoryRepository: ICategoryRepository
  ) {}

  async execute(data: ICreateTaskDto, user: UserToken): Promise<void> {
    const category = await this.categoryRepository.findById(
      data.category.id,
      user.id
    );

    const criticalityLevelIds =
      await this.criticalityLevelRepository.findCriticalityLevelIds();

    createTaskValidator(data, category, criticalityLevelIds);

    const task = new Task();

    Object.assign(task, {
      ...data,
      ownerId: user.id,
      categoryId: data.category.id,
      criticalityLevelId: data.criticalityLevel.id,
      isFinished: false,
    });

    await this.taskRepository.create(task);
  }
}
