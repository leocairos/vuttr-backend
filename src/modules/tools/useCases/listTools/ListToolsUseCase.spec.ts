import { ToolsRepositoryInMemory } from '@modules/tools/repositories/in-memory/ToolsRepositoryInMemory';

import { CreateToolUseCase } from '../createTool/CreateToolUseCase';
import { ListToolsUseCase } from './ListToolsUseCase';

let createToolUseCase: CreateToolUseCase;
let toolsRepositoryInMemory: ToolsRepositoryInMemory;
let listToolsUseCase: ListToolsUseCase;

describe('List Tool', () => {
  beforeEach(() => {
    toolsRepositoryInMemory = new ToolsRepositoryInMemory();
    createToolUseCase = new CreateToolUseCase(toolsRepositoryInMemory);
    listToolsUseCase = new ListToolsUseCase(toolsRepositoryInMemory);
  });

  it('should be able to list tools', async () => {
    const tool1 = {
      title: 'Tool Test',
      link: 'www.tooltest.com',
      description: 'Tool description test',
      tags: '[Tool, test]',
    };

    const tool2 = {
      title: 'Tool Test2',
      link: 'www.tooltest2.com',
      description: 'Tool 2 description test',
      tags: '[Tool2, test2]',
    };

    await createToolUseCase.execute({
      title: tool1.title,
      link: tool1.link,
      description: tool1.description,
      tags: tool1.tags,
    });

    await createToolUseCase.execute({
      title: tool2.title,
      link: tool2.link,
      description: tool2.description,
      tags: tool2.tags,
    });

    const tools = await listToolsUseCase.execute();

    expect(tools).toHaveLength(2);
    expect(Array.isArray(tools)).toBeTruthy();
  });
});
