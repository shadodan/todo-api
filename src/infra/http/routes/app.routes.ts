import { Router } from 'express';
import swaggerUi from 'swagger-ui-express';

import swaggerFile from '../swagger/openapi.json';

import { ensureAuth } from '../middlewares/ensureAuth';
import { appErrorHandler } from '../../errors/app-error.handler';
import { domainErrorHandler } from '../../errors/domain-error.handler';
import { authRoutes } from '../../../auth/infra/http/routes/auth.routes';
import { userRoutes } from '../../../modules/user/infra/http/routes/user.routes';
import { categoryRoutes } from '../../../modules/category/infra/http/routes/category.routes';
import { criticalityLevelRoutes } from '../../../modules/criticality-level/infra/http/routes/criticality-level.routes';
import { taskRoutes } from '../../../modules/task/infra/http/routes/task.routes';

const appRoutes = Router();

appRoutes.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));

appRoutes.use('/user', userRoutes);

appRoutes.use('/auth', authRoutes);

appRoutes.use('/criticality-level', criticalityLevelRoutes);

appRoutes.use('/category', ensureAuth, categoryRoutes);

appRoutes.use('/task', ensureAuth, taskRoutes);

appRoutes.use(domainErrorHandler);
appRoutes.use(appErrorHandler);

export { appRoutes };
