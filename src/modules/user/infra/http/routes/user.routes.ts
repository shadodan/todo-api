import { Router } from 'express';

import { UserController } from '../controllers/user.controller';
import { createUserValidator } from '../validators/create-user.validator';
import { updateUserValidator } from '../validators/update-user.validator';
import { validationErrorHandler } from '../../../../../infra/errors/validation-error.handler';

const userRoutes = Router();
const userController = new UserController();

userRoutes.post(
  '/',
  createUserValidator,
  validationErrorHandler,
  userController.create
);

userRoutes.get('/', userController.findAll);

userRoutes.get('/:id', userController.findOne);

userRoutes.put(
  '/:id',
  updateUserValidator,
  validationErrorHandler,
  userController.update
);

userRoutes.delete('/:id', userController.remove);

export { userRoutes };
