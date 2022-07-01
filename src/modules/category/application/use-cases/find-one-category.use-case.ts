import { ICategoryRepository } from '../../core/repositories/category.repository';
import { Category } from '../../core/entities/category.entity';
import { DomainError } from '../../../../core/domain/errors/domain.error';

type FindOneCategoryResponse = Omit<Category, 'user'>;

export class FindOneCategoryUseCase {
  constructor(private categoryRepository: ICategoryRepository) {}

  async execute(id: string): Promise<FindOneCategoryResponse> {
    const category = await this.categoryRepository.findOne(id);

    if (!category) {
      throw new DomainError('Category not found');
    }

    return {
      id: category.id,
      name: category.name,
      colour: category.colour,
      createdAt: category.createdAt,
      updatedAt: category.updatedAt,
    } as FindOneCategoryResponse;
  }
}
