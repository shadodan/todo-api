import { Router } from 'express';

import { ensureAuth } from '../middlewares/ensureAuth';
import { appErrorHandler } from '../../errors/app-error.handler';
import { domainErrorHandler } from '../../errors/domain-error.handler';
import { authRoutes } from '../../../auth/infra/http/routes/auth.routes';
import { userRoutes } from '../../../modules/user/infra/http/routes/user.routes';
import { categoryRoutes } from '../../../modules/category/infra/http/routes/category.routes';

const appRoutes = Router();

appRoutes.use('/user', userRoutes);

appRoutes.use('/auth', authRoutes);

appRoutes.use('/category', ensureAuth, categoryRoutes);

appRoutes.use(domainErrorHandler);
appRoutes.use(appErrorHandler);

export { appRoutes };
