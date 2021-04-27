import { inject, injectable } from 'tsyringe';

import { Tool } from '@modules/tools/infra/typeorm/entities/Tool';
import { IToolsRepository } from '@modules/tools/repositories/IToolsRepository';

interface IRequest {
  title: string;
  link: string;
  description: string;
  tags: string;
}

@injectable()
class CreateToolUseCase {
  constructor(
    @inject('ToolsRepository')
    private toolsRepository: IToolsRepository,
  ) {}

  async execute({ title, link, description, tags }: IRequest): Promise<Tool> {
    const tool = await this.toolsRepository.create({
      title,
      link,
      description,
      tags,
    });
    return tool;
  }
}

export { CreateToolUseCase };
