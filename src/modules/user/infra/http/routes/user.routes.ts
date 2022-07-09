import { Router } from 'express';

import { UserController } from '../controllers/user.controller';
import { ensureAuth } from '../../../../../infra/http/middlewares/ensureAuth';

const userRoutes = Router();
const userController = new UserController();

userRoutes.post('/', userController.create);

userRoutes.get('/', userController.findAll);

userRoutes.get('/:id', ensureAuth, userController.findOne);

userRoutes.put('/:id', ensureAuth, userController.update);

userRoutes.delete('/:id', ensureAuth, userController.remove);

export { userRoutes };
