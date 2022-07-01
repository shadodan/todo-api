import { ICreateCategoryDto } from '../dto/create-category.dto';
import { AppError } from '../../../../core/domain/errors/app.error';

export function createCategoryValidator({
  name,
  colour,
}: ICreateCategoryDto): void {
  // Category name validation
  if (!name || name.trim().length > 255) {
    throw new AppError('Invalid name');
  }

  // Colour validation
  if (!colour || colour.trim().length !== 7 || !colour.includes('#')) {
    throw new AppError('Invalid colour');
  }
}
