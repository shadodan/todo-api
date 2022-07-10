import { ICategoryRepository } from '../core/repositories/category.repository';
import { UserToken } from '../../../auth/core/interfaces/user-token';
import { IFindAllCategoryResponse } from '../core/interfaces/find-all-category-response.interface';

export class FindAllCategoryByUserUseCase {
  constructor(private categoryRepository: ICategoryRepository) {}

  async execute(user: UserToken): Promise<IFindAllCategoryResponse[]> {
    return await this.categoryRepository.findAllByUser(user.id);
  }
}
