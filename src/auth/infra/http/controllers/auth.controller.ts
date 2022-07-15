import { NextFunction, Request, Response } from 'express';

import { loginFactory } from '../../factories/login.factory';
import { recoverPasswordFactory } from '../../factories/recover-password.factory';
import { changeForgottenPasswordFactory } from '../../factories/change-forgotten-password.factory';

export class AuthController {
  async login(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const service = loginFactory();

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
      const service = recoverPasswordFactory();

      const { email } = req.body;

      res.json(await service.execute(email));
    } catch (err) {
      next(err);
    }
  }

  async changeForgottenPassword(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const service = changeForgottenPasswordFactory();

      const input = req.body;
      const { id, token } = req.params;

      res.json(await service.execute(id, token, input));
    } catch (err) {
      next(err);
    }
  }
}
