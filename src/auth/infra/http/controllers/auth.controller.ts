import { NextFunction, Request, Response } from 'express';

import { loginFactory } from '../../factories/login.factory';
import { recoverPasswordByEmailFactory } from '../../factories/recover-password-by-email.factory';
import { changeForgottenPasswordFactory } from '../../factories/change-forgotten-password.factory';
import { recoverPasswordBySmsFactory } from '../../factories/recover-password-by-sms.factory';

export class AuthController {
  async login(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const useCase = loginFactory();

      const input = req.body;

      res.json(await useCase.execute(input));
    } catch (err) {
      next(err);
    }
  }

  async recoverPasswordByEmail(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const useCase = recoverPasswordByEmailFactory();

      const { email } = req.body;

      res.json(await useCase.execute(email));
    } catch (err) {
      next(err);
    }
  }

  async recoverPasswordBySms(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const useCase = recoverPasswordBySmsFactory();

      const { phone } = req.body;

      res.json(await useCase.execute(phone));
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
      const useCase = changeForgottenPasswordFactory();

      const input = req.body;
      const { id, token } = req.params;

      res.json(await useCase.execute(id, token, input));
    } catch (err) {
      next(err);
    }
  }
}
