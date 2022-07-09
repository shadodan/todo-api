import { ICategoryRepository } from '../core/repositories/category.repository';
import { Category } from '../core/entities/category.entity';
import { UserToken } from '../../../auth/core/interfaces/user-token';

type FindAllCategoryResponse = Pick<Category, 'id' | 'name' | 'colour'>;

export class FindAllCategoryByUserUseCase {
  constructor(private categoryRepository: ICategoryRepository) {}

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
