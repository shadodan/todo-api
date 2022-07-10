import { NextFunction, Request, Response } from 'express';
import { createTaskFactory } from '../../factories/create-task.factory';
import { findAllTaskByUserFactory } from '../../factories/find-all-task-by-user.factory';
import { findOneTaskFactory } from '../../factories/find-one-task.factory';
import { updateTaskFactory } from '../../factories/update-task.factory';
import { removeTaskFactory } from '../../factories/remove-task.factory';

export class TaskController {
  async create(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const useCase = createTaskFactory();

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
      const useCase = findAllTaskByUserFactory();

      const { query } = req;
      const { user } = req.token.sub;

      res.json(await useCase.execute(query, user));
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
      const useCase = findOneTaskFactory();

      const { id } = req.params;
      const { user } = req.token.sub;

      res.json(await useCase.execute(id, user));
    } catch (err) {
      next(err);
    }
  }

  async update(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const useCase = updateTaskFactory();

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
      const useCase = removeTaskFactory();

      const { id } = req.params;
      const { user } = req.token.sub;

      res.json(await useCase.execute(id, user));
    } catch (err) {
      next(err);
    }
  }
}
