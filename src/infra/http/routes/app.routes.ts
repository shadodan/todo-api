import { Router } from 'express';

import { appErrorHandler } from '../../errors/app-error.handler';
import { domainErrorHandler } from '../../errors/domain-error.handler';
import { authRoutes } from '../../../auth/infra/http/routes/auth.routes';
import { userRoutes } from '../../../modules/user/infra/http/routes/user.routes';

const appRoutes = Router();

appRoutes.use('/user', userRoutes);

appRoutes.use('/auth', authRoutes);

appRoutes.use(appErrorHandler);
appRoutes.use(domainErrorHandler);

export { appRoutes };
