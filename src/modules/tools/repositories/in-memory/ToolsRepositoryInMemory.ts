import { Tool } from '@modules/tools/infra/typeorm/entities/Tool';

import { IToolsRepository, ICreateToolDTO } from '../IToolsRepository';

class ToolsRepositoryInMemory implements IToolsRepository {
  tools: Tool[] = [];

  async create({
    title,
    link,
    description,
    tags,
  }: ICreateToolDTO): Promise<Tool> {
    const tool = new Tool();

    Object.assign(tool, { title, link, description, tags });

    this.tools.push(tool);
    return tool;
  }

  async list(): Promise<Tool[]> {
    const all = this.tools;
    return all;
  }

  async findByTag(tag: string): Promise<Tool[]> {
    const tools = this.tools.filter(tool => tool.tags.includes(tag));
    return tools;
  }

  async removeById(id: string): Promise<void> {
    const findIndex = this.tools.findIndex(tool => tool.id === id);
    this.tools.splice(findIndex, 1);
  }
}

export { ToolsRepositoryInMemory };
