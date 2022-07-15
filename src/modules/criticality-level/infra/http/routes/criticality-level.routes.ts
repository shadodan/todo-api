import { Router } from 'express';

import { CriticalityLevelController } from '../controllers/criticality-level.controller';

const criticalityLevelRoutes = Router();
const criticalityLevelController = new CriticalityLevelController();

criticalityLevelRoutes.get('/', criticalityLevelController.findAll);

criticalityLevelRoutes.get('/:id', criticalityLevelController.findOne);

export { criticalityLevelRoutes };
