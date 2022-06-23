import { container } from 'tsyringe';
import { NextFunction, Request, Response } from 'express';

import { LoginService } from '../../../application/services/login.service';
import { RecoverPasswordService } from '../../../application/services/recover-password.service';

export class AuthController {
  async login(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const service = container.resolve(LoginService);

      const input = req.body;

      res.json(await service.execute(input));
    } catch (err) {
      next(err);
    }
  }

  async recoverPassword(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const service = container.resolve(RecoverPasswordService);

      const { email } = req.body;

      res.json(await service.execute(email));
    } catch (err) {
      next(err);
    }
  }
}
