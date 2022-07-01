import { NextFunction, Request, Response } from 'express';

import { createUserFactory } from '../../factories/create-user.factory';
import { updateUserFactory } from '../../factories/update-user.factory';
import { removeUserFactory } from '../../factories/remove-user.factory';
import { findAllUserFactory } from '../../factories/find-all-user.factory';
import { findOneUserFactory } from '../../factories/find-one-user.factory';

export class UserController {
  async create(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const useCase = createUserFactory();

      const data = req.body;

      res.status(201).json(await useCase.execute(data));
    } catch (err) {
      next(err);
    }
  }

  async findAll(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const useCase = findAllUserFactory();

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
      const useCase = findOneUserFactory();

      const { id } = req.params;

      res.json(await useCase.execute(id));
    } catch (err) {
      next(err);
    }
  }

  async update(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const useCase = updateUserFactory();

      const data = req.body;
      const { id } = req.params;
      const { user } = req.token.sub;

      res.json(await useCase.execute(id, data, user));
    } catch (err) {
      next(err);
    }
  }

  async remove(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const useCase = removeUserFactory();

      const { id } = req.params;
      const { user } = req.token.sub;

      res.json(await useCase.execute(id, user));
    } catch (err) {
      next(err);
    }
  }
}
