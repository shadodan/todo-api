import { Router } from 'express';
import { TaskController } from '../controllers/task.controller';

const taskRoutes = Router();
const categoryController = new TaskController();

taskRoutes.post('/', categoryController.create);

taskRoutes.get('/', categoryController.findAllByUser);

taskRoutes.get('/:id', categoryController.findOne);

taskRoutes.put('/:id', categoryController.update);

taskRoutes.delete('/:id', categoryController.remove);

export { taskRoutes };
