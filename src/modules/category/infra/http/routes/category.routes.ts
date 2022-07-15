import { Router } from 'express';
import { CategoryController } from '../controllers/category.controller';

const categoryRoutes = Router();
const categoryController = new CategoryController();

categoryRoutes.post('/', categoryController.create);

categoryRoutes.get('/', categoryController.findAllByUser);

categoryRoutes.get('/:id', categoryController.findOne);

categoryRoutes.put('/:id', categoryController.update);

categoryRoutes.delete('/:id', categoryController.remove);

export { categoryRoutes };
