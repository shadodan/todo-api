import { NextFunction, Request, Response } from 'express';

import { AppError } from '../../core/domain/errors/app.error';
import { JsonwebtokenJwtProvider } from '../providers/jwt/jsonwebtoken-jwt.provider';

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
    const jwtProvider = new JsonwebtokenJwtProvider();

    req.token = jwtProvider.verify(token);

    next();
  } catch (err) {
    next(err);
  }
}
