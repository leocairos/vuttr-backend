import { Router } from 'express';

import { toolsRoutes } from './tools.routes';

const router = Router();

router.use('/tools', toolsRoutes);

export { router };
