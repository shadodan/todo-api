import { Category } from '../entities/category.entity';

export interface ICategoryRepository {
  create(data: Category): Promise<void>;

  findAllByUser(userId: string): Promise<Category[]>;

  findOne(id: string): Promise<Category | null>;

  update(id: string, data: Partial<Category>): Promise<void>;

  remove(id: string): Promise<void>;
}
