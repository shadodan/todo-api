import { NextFunction, Request, Response } from 'express';
import { createCategoryFactory } from '../../factories/create-category.factory';
import { findAllCategoryByUserFactory } from '../../factories/find-all-category-by-user.factory';
import { findOneCategoryFactory } from '../../factories/find-one-category.factory';
import { updateCategoryFactory } from '../../factories/update-category.factory';
import { removeCategoryFactory } from '../../factories/remove-category.factory';

export class CategoryController {
  async create(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const useCase = createCategoryFactory();

      const data = req.body;
      const { user } = req.token.sub;

      res.status(201).json(await useCase.execute(data, user));
    } catch (err) {
      next(err);
    }
  }

  async findAllByUser(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const useCase = findAllCategoryByUserFactory();

      const { user } = req.token.sub;

      res.json(await useCase.execute(user));
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
      const useCase = findOneCategoryFactory();

      const { id } = req.params;
      const { user } = req.token.sub;

      res.json(await useCase.execute(id, user));
    } catch (err) {
      next(err);
    }
  }

  async update(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const useCase = updateCategoryFactory();

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
      const useCase = removeCategoryFactory();

      const { id } = req.params;
      const { user } = req.token.sub;

      res.json(await useCase.execute(id, user));
    } catch (err) {
      next(err);
    }
  }
}
