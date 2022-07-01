import { User } from '../../../user/core/entities/user.entity';
import { Category } from '../../core/entities/category.entity';
import { ICreateCategoryDto } from '../dto/create-category.dto';
import { ICategoryRepository } from '../../core/repositories/category.repository';
import { createCategoryValidator } from '../validators/create-category.validator';

export class CreateCategoryUseCase {
  constructor(private categoryRepository: ICategoryRepository) {}

  async execute(data: ICreateCategoryDto, user: User): Promise<void> {
    createCategoryValidator(data);

    const category = new Category();

    Object.assign(category, { ...data, user });

    await this.categoryRepository.create(category);
  }
}
