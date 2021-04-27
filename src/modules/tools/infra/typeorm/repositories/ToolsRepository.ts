import { getRepository, Like, Repository } from 'typeorm';

import { Tool } from '@modules/tools/infra/typeorm/entities/Tool';
import {
  IToolsRepository,
  ICreateToolDTO,
} from '@modules/tools/repositories/IToolsRepository';

class ToolsRepository implements IToolsRepository {
  private repository: Repository<Tool>;

  constructor() {
    this.repository = getRepository(Tool);
  }

  async create({
    title,
    link,
    description,
    tags,
  }: ICreateToolDTO): Promise<Tool> {
    const tool = this.repository.create({
      title,
      link,
      description,
      tags,
    });

    const toolSaved = await this.repository.save(tool);
    return toolSaved;
  }

  async list(): Promise<Tool[]> {
    const tools = await this.repository.find();
    return tools;
  }

  async findByTag(tag: string): Promise<Tool[]> {
    const tools = await this.repository.find({
      where: { tags: Like(`%${tag}%`) },
    });
    return tools;
  }

  async removeById(id: string): Promise<void> {
    await this.repository.delete(id);
  }
}

export { ToolsRepository };
