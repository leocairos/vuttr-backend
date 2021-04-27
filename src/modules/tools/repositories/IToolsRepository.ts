import { Tool } from '../infra/typeorm/entities/Tool';

export interface ICreateToolDTO {
  title: string;
  link: string;
  description: string;
  tags: string;
}

interface IToolsRepository {
  create({ title, link, description, tags }: ICreateToolDTO): Promise<Tool>;
  list(): Promise<Tool[]>;
  findByTag(tag: string): Promise<Tool[]>;
  removeById(id: string): Promise<void>;
}

export { IToolsRepository };
