import { Router } from 'express';

import { CreateToolController } from '@modules/tools/useCases/createTool/CreateToolController';
import { ListToolsController } from '@modules/tools/useCases/listTools/ListToolsController';

const toolsRoutes = Router();

const createToolController = new CreateToolController();
const listToolsController = new ListToolsController();

toolsRoutes.post('/', createToolController.handle);

toolsRoutes.get('/', listToolsController.handle);

export { toolsRoutes };
