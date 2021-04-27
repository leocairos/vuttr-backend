import { ToolsRepositoryInMemory } from '@modules/tools/repositories/in-memory/ToolsRepositoryInMemory';

import { CreateToolUseCase } from '../createTool/CreateToolUseCase';
import { RemoveToolsUseCase } from './RemoveToolsUseCase';

let createToolUseCase: CreateToolUseCase;
let toolsRepositoryInMemory: ToolsRepositoryInMemory;
let removeToolsUseCase: RemoveToolsUseCase;

describe('Remove Tool', () => {
  beforeEach(() => {
    toolsRepositoryInMemory = new ToolsRepositoryInMemory();
    createToolUseCase = new CreateToolUseCase(toolsRepositoryInMemory);
    removeToolsUseCase = new RemoveToolsUseCase(toolsRepositoryInMemory);
  });

  it('should be able to remove a tool by id', async () => {
    const tool = {
      title: 'Tool Test',
      link: 'www.tooltest.com',
      description: 'Tool description test',
      tags: '[Tool, test]',
    };

    const toolCreated = await createToolUseCase.execute({
      title: tool.title,
      link: tool.link,
      description: tool.description,
      tags: tool.tags,
    });

    const result = await removeToolsUseCase.execute(toolCreated.id);
  });
});
