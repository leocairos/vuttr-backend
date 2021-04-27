import { Router } from 'express';

import { CreateToolController } from '@modules/tools/useCases/createTool/CreateToolController';
import { ListToolsController } from '@modules/tools/useCases/listTools/ListToolsController';
import { RemoveToolsController } from '@modules/tools/useCases/removeTools/RemoveToolsController';

const toolsRoutes = Router();

const createToolController = new CreateToolController();
const listToolsController = new ListToolsController();
const removeToolsController = new RemoveToolsController();

toolsRoutes.post('/', createToolController.handle);

toolsRoutes.get('/', listToolsController.handle);

toolsRoutes.delete('/:id', removeToolsController.handle);

export { toolsRoutes };
