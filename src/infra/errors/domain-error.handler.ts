import { NextFunction, Request, Response } from 'express';

import { DomainError } from '../../core/domain/errors/domain.error';

export function domainErrorHandler(
  err: Error,
  _req: Request,
  res: Response,
  _next: NextFunction
) {
  if (err instanceof DomainError) {
    res.status(303).json({
      status: 'Error',
      message: err.message,
    });
  }

  res.status(500).json({
    status: 'Error',
    message: err.message,
  });
}
