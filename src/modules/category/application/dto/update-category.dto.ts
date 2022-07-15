import { ICreateCategoryDto } from './create-category.dto';

export interface IUpdateCategoryDto extends Partial<ICreateCategoryDto> {}
