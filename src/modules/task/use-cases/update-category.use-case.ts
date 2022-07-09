import { ITaskRepository } from '../core/repositories/task.repository';
import { IUpdateTaskDto } from '../application/dto/update-task.dto';
import { updateTaskValidator } from '../application/validators/update-task.validator';
import { DomainError } from '../../../core/domain/errors/domain.error';
import { UserToken } from '../../../auth/core/interfaces/user-token';

export class UpdateCategoryUseCase {
  constructor(private categoryRepository: ITaskRepository) {}

  async execute(
    id: string,
    data: IUpdateTaskDto,
    user: UserToken
  ): Promise<void> {
    const category = await this.categoryRepository.findOne(id, user.id);

    if (!category) {
      throw new DomainError('Category not found');
    }

    updateTaskValidator(data, user, category);

    await this.categoryRepository.update(id, data);
  }
}
