import { ITaskRepository } from '../core/repositories/task.repository';
import { Task } from '../core/entities/task.entity';
import { DomainError } from '../../../core/domain/errors/domain.error';
import { UserToken } from '../../../auth/core/interfaces/user-token';

type FindOneCategoryResponse = Omit<Task, 'id' | 'userId'>;

export class FindOneCategoryUseCase {
  constructor(private categoryRepository: ITaskRepository) {}

  async execute(id: string, user: UserToken): Promise<FindOneCategoryResponse> {
    const category = await this.categoryRepository.findOne(id, user.id);

    if (!category) {
      throw new DomainError('Category not found');
    }

    return {
      name: category.name,
      colour: category.colour,
      createdAt: category.createdAt,
      updatedAt: category.updatedAt,
    } as FindOneCategoryResponse;
  }
}
