import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { RemoveToolsUseCase } from './RemoveToolsUseCase';

class RemoveToolsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const removeToolsUseCase = container.resolve(RemoveToolsUseCase);
    await removeToolsUseCase.execute(id);
    return response.status(204).send();
  }
}

export { RemoveToolsController };
