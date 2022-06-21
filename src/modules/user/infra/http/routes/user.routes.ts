import { Router } from 'express';

import { UserController } from '../controllers/user.controller';

const userRoutes = Router();
const userController = new UserController();

userRoutes.post('/', userController.create);

userRoutes.get('/', userController.findAll);

userRoutes.get('/:id', userController.findOne);

userRoutes.put('/:id', userController.update);

userRoutes.delete('/:id', userController.remove);

export { userRoutes };
