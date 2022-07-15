import { ICategoryRepository } from '../core/repositories/category.repository';
import { DomainError } from '../../../core/domain/errors/domain.error';
import { UserToken } from '../../../auth/core/interfaces/user-token';
import { IFindOneCategoryResponse } from '../core/interfaces/find-one-category-response.interface';

export class FindOneCategoryUseCase {
  constructor(private categoryRepository: ICategoryRepository) {}

  async execute(
    id: string,
    user: UserToken
  ): Promise<IFindOneCategoryResponse> {
    const category = await this.categoryRepository.findOne(id, user.id);

    if (!category) {
      throw new DomainError('Category not found');
    }

    return category;
  }
}
