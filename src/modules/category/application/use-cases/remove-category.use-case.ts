import { ICategoryRepository } from '../../core/repositories/category.repository';
import { User } from '../../../user/core/entities/user.entity';
import { removeCategoryValidator } from '../validators/remove-category.validator';
import { DomainError } from '../../../../core/domain/errors/domain.error';

export class RemoveCategoryUseCase {
  constructor(private categoryRepository: ICategoryRepository) {}

  async execute(id: string, user: User): Promise<void> {
    const category = await this.categoryRepository.findOne(id);

    if (!category) {
      throw new DomainError('Category not found');
    }

    removeCategoryValidator(user, category);

    await this.categoryRepository.remove(id);
  }
}
