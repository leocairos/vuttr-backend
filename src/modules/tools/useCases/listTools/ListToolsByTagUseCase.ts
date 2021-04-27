import { inject, injectable } from 'tsyringe';

import { Tool } from '@modules/tools/infra/typeorm/entities/Tool';
import { IToolsRepository } from '@modules/tools/repositories/IToolsRepository';

@injectable()
class ListToolsByTagUseCase {
  constructor(
    @inject('ToolsRepository')
    private toolsRepository: IToolsRepository,
  ) {}

  async execute(tag: string): Promise<Tool[]> {
    const tools = await this.toolsRepository.findByTag(tag);

    return tools;
  }
}

export { ListToolsByTagUseCase };
