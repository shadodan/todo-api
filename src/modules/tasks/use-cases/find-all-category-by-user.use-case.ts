import { ITaskRepository } from '../core/repositories/task.repository';
import { Task } from '../core/entities/task.entity';
import { UserToken } from '../../../auth/core/interfaces/user-token';

type FindAllCategoryResponse = Pick<Task, 'id' | 'name' | 'colour'>;

export class FindAllCategoryByUserUseCase {
  constructor(private categoryRepository: ITaskRepository) {}

  async execute(user: UserToken): Promise<FindAllCategoryResponse[]> {
    const categories = await this.categoryRepository.findAllByUser(user.id);

    return categories.map(category => {
      return {
        id: category.id,
        name: category.name,
        colour: category.colour,
      } as FindAllCategoryResponse;
    });
  }
}
