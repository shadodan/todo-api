import { Category } from '../core/entities/category.entity';
import { ICreateCategoryDto } from '../application/dto/create-category.dto';
import { ICategoryRepository } from '../core/repositories/category.repository';
import { createCategoryValidator } from '../application/validators/create-category.validator';
import { UserToken } from '../../../auth/core/interfaces/user-token';

export class CreateCategoryUseCase {
  constructor(private categoryRepository: ICategoryRepository) {}

  async execute(data: ICreateCategoryDto, user: UserToken): Promise<void> {
    createCategoryValidator(data);

    const category = new Category();

    Object.assign(category, { ...data, userId: user.id });

    await this.categoryRepository.create(category);
  }
}
