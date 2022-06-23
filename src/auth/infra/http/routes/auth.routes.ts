import { Router } from 'express';

import { AuthController } from '../controllers/auth.controller';

const authRoutes = Router();
const authController = new AuthController();

authRoutes.post('/login', authController.login);

authRoutes.post('/recover-password', authController.recoverPassword);

export { authRoutes };
