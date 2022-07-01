import { ICategoryRepository } from '../../core/repositories/category.repository';
import { User } from '../../../user/core/entities/user.entity';
import { Category } from '../../core/entities/category.entity';

type FindAllCategoryResponse = Pick<Category, 'name' | 'colour'>;

export class FindAllCategoryByUserUseCase {
  constructor(private categoryRepository: ICategoryRepository) {}

  async execute(user: User): Promise<FindAllCategoryResponse[]> {
    const categories = await this.categoryRepository.findAllByUser(user.id);

    return categories.map(category => {
      return {
        name: category.name,
        colour: category.colour,
      } as FindAllCategoryResponse;
    });
  }
}
