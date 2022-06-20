import { validationResult } from 'express-validator';
import { NextFunction, Request, Response } from 'express';

export function validationErrorHandler(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    res.status(400).json({ status: 'Error', message: errors.array() }).end();
  } else {
    next();
  }
}
