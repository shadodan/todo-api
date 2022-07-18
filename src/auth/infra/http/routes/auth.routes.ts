import { Router } from 'express';

import { AuthController } from '../controllers/auth.controller';

const authRoutes = Router();
const authController = new AuthController();

authRoutes.post('/login', authController.login);

authRoutes.post(
  '/recover-password-by-email',
  authController.recoverPasswordByEmail
);

authRoutes.post(
  '/recover-password-by-sms',
  authController.recoverPasswordBySms
);

authRoutes.post(
  '/change-forgotten-password/:id/:token',
  authController.changeForgottenPassword
);

export { authRoutes };
