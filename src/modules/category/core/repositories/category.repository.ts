import { Category } from '../entities/category.entity';
import { IFindAllCategoryResponse } from '../interfaces/find-all-category-response.interface';
import { IFindOneCategoryResponse } from '../interfaces/find-one-category-response.interface';

export interface ICategoryRepository {
  create(data: Category): Promise<void>;

  findAllByUser(userId: string): Promise<IFindAllCategoryResponse[]>;

  findOne(id: string, userId: string): Promise<IFindOneCategoryResponse | null>;

  findById(id: string, userId: string): Promise<Category | null>;

  update(id: string, data: Partial<Category>): Promise<void>;

  remove(id: string): Promise<void>;
}
