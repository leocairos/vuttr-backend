import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ListToolsByTagUseCase } from './ListToolsByTagUseCase';
import { ListToolsUseCase } from './ListToolsUseCase';

class ListToolsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { tag } = request.query;

    if (tag) {
      const listToolsByTagUseCase = container.resolve(ListToolsByTagUseCase);
      const allByTag = await listToolsByTagUseCase.execute(`${tag}`);
      return response.json(allByTag);
    }

    const listToolsUseCase = container.resolve(ListToolsUseCase);
    const all = await listToolsUseCase.execute();
    return response.json(all);
  }
}

export { ListToolsController };
