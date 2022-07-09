import { ITaskRepository } from '../core/repositories/task.repository';
import { removeTaskValidator } from '../application/validators/remove-task.validator';
import { DomainError } from '../../../core/domain/errors/domain.error';
import { UserToken } from '../../../auth/core/interfaces/user-token';

export class RemoveCategoryUseCase {
  constructor(private categoryRepository: ITaskRepository) {}

  async execute(id: string, user: UserToken): Promise<void> {
    const category = await this.categoryRepository.findOne(id, user.id);

    if (!category) {
      throw new DomainError('Category not found');
    }

    removeTaskValidator(user, category);

    await this.categoryRepository.remove(id);
  }
}
