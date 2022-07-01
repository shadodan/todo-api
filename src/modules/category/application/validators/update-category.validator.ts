import { IUpdateCategoryDto } from '../dto/update-category.dto';
import { Category } from '../../core/entities/category.entity';
import { User } from '../../../user/core/entities/user.entity';
import { AppError } from "../../../../core/domain/errors/app.error";

export function updateCategoryValidator(
  { name, colour }: IUpdateCategoryDto,
  { id: loggedUserId }: User,
  { user: { id: categoryOwnerId } }: Category
): void {
  // Category name validation
  if (!name || name.trim().length > 255) {
    throw new AppError('Invalid name');
  }

  // Colour validation
  if (!colour || colour.trim().length !== 7 || !colour.includes('#')) {
    throw new AppError('Invalid colour');
  }

  // Authentication validation
  if (loggedUserId !== categoryOwnerId) {
    throw new AppError("You cannot change another user's category")
  }
}
