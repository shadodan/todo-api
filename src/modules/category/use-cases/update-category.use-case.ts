import { ICategoryRepository } from '../core/repositories/category.repository';
import { IUpdateCategoryDto } from '../application/dto/update-category.dto';
import { updateCategoryValidator } from '../application/validators/update-category.validator';
import { DomainError } from '../../../core/domain/errors/domain.error';
import { UserToken } from '../../../auth/core/interfaces/user-token';

export class UpdateCategoryUseCase {
  constructor(private categoryRepository: ICategoryRepository) {}

  async execute(
    id: string,
    data: IUpdateCategoryDto,
    user: UserToken
  ): Promise<void> {
    const category = await this.categoryRepository.findById(id, user.id);

    if (!category) {
      throw new DomainError('Category not found');
    }

    updateCategoryValidator(data, category, user);

    await this.categoryRepository.update(id, data);
  }
}
