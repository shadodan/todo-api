import { ICategoryRepository } from '../../core/repositories/category.repository';
import { IUpdateCategoryDto } from '../dto/update-category.dto';
import { User } from '../../../user/core/entities/user.entity';
import { updateCategoryValidator } from '../validators/update-category.validator';
import { DomainError } from '../../../../core/domain/errors/domain.error';

export class UpdateCategoryUseCase {
  constructor(private categoryRepository: ICategoryRepository) {}

  async execute(
    id: string,
    data: IUpdateCategoryDto,
    user: User
  ): Promise<void> {
    const category = await this.categoryRepository.findOne(id);

    if (!category) {
      throw new DomainError('Category not found');
    }

    updateCategoryValidator(data, user, category);

    await this.categoryRepository.update(id, data);
  }
}
