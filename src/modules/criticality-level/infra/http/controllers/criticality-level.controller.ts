import { NextFunction, Request, Response } from 'express';

import { findAllCriticalityLevelFactory } from '../../factories/find-all-criticality-level.factory';
import { findOneCriticalityLevelFactory } from '../../factories/find-one-criticality-level.factory';

export class CriticalityLevelController {
  async findAll(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const useCase = findAllCriticalityLevelFactory();

      res.json(await useCase.execute());
    } catch (err) {
      next(err);
    }
  }

  async findOne(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const useCase = findOneCriticalityLevelFactory();

      const { id } = req.params;

      res.json(await useCase.execute(id));
    } catch (err) {
      next(err);
    }
  }
}
