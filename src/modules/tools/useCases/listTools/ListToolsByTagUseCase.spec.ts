import { ToolsRepositoryInMemory } from '@modules/tools/repositories/in-memory/ToolsRepositoryInMemory';

import { CreateToolUseCase } from '../createTool/CreateToolUseCase';
import { ListToolsByTagUseCase } from './ListToolsByTagUseCase';

let createToolUseCase: CreateToolUseCase;
let toolsRepositoryInMemory: ToolsRepositoryInMemory;
let listToolsByTagUseCase: ListToolsByTagUseCase;

describe('List Tool By Tag', () => {
  beforeEach(() => {
    toolsRepositoryInMemory = new ToolsRepositoryInMemory();
    createToolUseCase = new CreateToolUseCase(toolsRepositoryInMemory);
    listToolsByTagUseCase = new ListToolsByTagUseCase(toolsRepositoryInMemory);
  });

  it('should be able to list tools by tag', async () => {
    const tool1 = {
      title: 'Tool Test',
      link: 'www.tooltest.com',
      description: 'Tool description test',
      tags: '[Tool1, test1]',
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

    const tools = await listToolsByTagUseCase.execute('Tool2');

    expect(tools).toHaveLength(1);
    expect(Array.isArray(tools)).toBeTruthy();
  });
});
