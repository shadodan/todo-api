import { NextFunction, Request, Response } from 'express';

import { AppError } from '../../core/domain/errors/app.error';

export function appErrorHandler(
  err: Error,
  _req: Request,
  res: Response,
  _next: NextFunction
) {
  if (err instanceof AppError) {
    res.status(err.statusCode).json({
      status: 'Error',
      message: err.message,
    });
  }

  res.status(500).json({
    status: 'Error',
    message: err.message,
  });
}
