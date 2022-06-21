import { container } from 'tsyringe';
import { NextFunction, Request, Response } from 'express';

import { AppError } from '../../core/domain/errors/app.error';
import { IJwtProvider } from '../../core/application/providers/jwt.provider';

export function ensureAuth(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  const authToken = req.headers.authorization;

  if (!authToken) {
    throw new AppError('You are not authenticated', 401);
  }

  const [, token] = authToken.split(' ');

  try {
    const jwtProvider = container.resolve<IJwtProvider>('JwtProvider');

    req.token = jwtProvider.verify(token);

    next();
  } catch (err) {
    next(err);
  }
}
