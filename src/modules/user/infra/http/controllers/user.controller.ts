import { container } from 'tsyringe';
import { NextFunction, Request, Response } from 'express';

import { CreateUserUseCase } from '../../../application/use-cases/create-user.use-case';
import { UpdateUserUseCase } from '../../../application/use-cases/update-user.use-case';
import { RemoveUserUseCase } from '../../../application/use-cases/remove-user.use-case';
import { FindAllUserUseCase } from '../../../application/use-cases/find-all-user.use-case';
import { FindOneUserUseCase } from '../../../application/use-cases/find-one-user.use-case';

export class UserController {
  async create(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const useCase = container.resolve(CreateUserUseCase);

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
      const useCase = container.resolve(FindAllUserUseCase);

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
      const useCase = container.resolve(FindOneUserUseCase);

      const { id } = req.params;

      res.json(await useCase.execute(id));
    } catch (err) {
      next(err);
    }
  }

  async update(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const useCase = container.resolve(UpdateUserUseCase);

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
      const useCase = container.resolve(RemoveUserUseCase);

      const { id } = req.params;
      const { user } = req.token.sub;

      res.json(await useCase.execute(id, user));
    } catch (err) {
      next(err);
    }
  }
}
