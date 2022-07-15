import { ICategoryRepository } from '../core/repositories/category.repository';
import { removeCategoryValidator } from '../application/validators/remove-category.validator';
import { DomainError } from '../../../core/domain/errors/domain.error';
import { UserToken } from '../../../auth/core/interfaces/user-token';

export class RemoveCategoryUseCase {
  constructor(private categoryRepository: ICategoryRepository) {}

  async execute(id: string, user: UserToken): Promise<void> {
    const category = await this.categoryRepository.findById(id, user.id);

    if (!category) {
      throw new DomainError('Category not found');
    }

    removeCategoryValidator(user, category);

    await this.categoryRepository.remove(id);
  }
}
