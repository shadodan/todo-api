import { ICategoryRepository } from '../core/repositories/category.repository';
import { Category } from '../core/entities/category.entity';
import { DomainError } from '../../../core/domain/errors/domain.error';
import { UserToken } from '../../../auth/core/interfaces/user-token';

type FindOneCategoryResponse = Omit<Category, 'id' | 'userId'>;

export class FindOneCategoryUseCase {
  constructor(private categoryRepository: ICategoryRepository) {}

  async execute(id: string, user: UserToken): Promise<FindOneCategoryResponse> {
    const category = await this.categoryRepository.findOne(id, user.id);

    if (!category) {
      throw new DomainError('Category not found');
    }

    return {
      name: category.name,
      colour: category.colour,
      createdAt: category.createdAt,
      updatedAt: category.updatedAt,
    } as FindOneCategoryResponse;
  }
}
