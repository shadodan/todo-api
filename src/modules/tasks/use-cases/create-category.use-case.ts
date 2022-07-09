import { Task } from '../core/entities/task.entity';
import { ICreateTaskDto } from '../application/dto/create-task.dto';
import { ITaskRepository } from '../core/repositories/task.repository';
import { createTaskValidator } from '../application/validators/create-task.validator';
import { UserToken } from '../../../auth/core/interfaces/user-token';

export class CreateCategoryUseCase {
  constructor(private categoryRepository: ITaskRepository) {}

  async execute(data: ICreateTaskDto, user: UserToken): Promise<void> {
    createTaskValidator(data);

    const category = new Task();

    Object.assign(category, { ...data, userId: user.id });

    await this.categoryRepository.create(category);
  }
}
