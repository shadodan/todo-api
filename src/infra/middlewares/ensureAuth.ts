import { container } from 'tsyringe';
import { NextFunction, Request, Response } from 'express';

import { AppError } from '../../core/domain/errors/app.error';
import { IJwtAuthProvider } from '../../core/application/providers/jwt-auth.provider';

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
    const jwtAuthProvider =
      container.resolve<IJwtAuthProvider>('JwtAuthProvider');

    req.token = jwtAuthProvider.verify(token);

    next();
  } catch (err) {
    next(err);
  }
}
