import { inject, injectable } from 'tsyringe';

import { IToolsRepository } from '@modules/tools/repositories/IToolsRepository';

@injectable()
class RemoveToolsUseCase {
  constructor(
    @inject('ToolsRepository')
    private toolsRepository: IToolsRepository,
  ) {}

  async execute(id: string): Promise<void> {
    await this.toolsRepository.removeById(id);
  }
}

export { RemoveToolsUseCase };
