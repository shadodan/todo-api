import { container } from 'tsyringe';
import { NextFunction, Request, Response } from 'express';

import { LoginService } from '../../../application/services/login.service';

export class AuthController {
  async login(req: Request, res: Response, next: NextFunction): Promise<void> {
    // TODO: MAKE THE TOKEN CONTENT BE BETTER
    try {
      const service = container.resolve(LoginService);

      const input = req.body;

      res.json(await service.execute(input));
    } catch (err) {
      next(err);
    }
  }
}
