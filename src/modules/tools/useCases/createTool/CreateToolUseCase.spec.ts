import { ToolsRepositoryInMemory } from '@modules/tools/repositories/in-memory/ToolsRepositoryInMemory';

import { CreateToolUseCase } from './CreateToolUseCase';

let createToolUseCase: CreateToolUseCase;
let toolsRepositoryInMemory: ToolsRepositoryInMemory;

describe('Create Tool', () => {
  beforeEach(() => {
    toolsRepositoryInMemory = new ToolsRepositoryInMemory();
    createToolUseCase = new CreateToolUseCase(toolsRepositoryInMemory);
  });

  it('should be able to create a new tool', async () => {
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

    expect(toolCreated).toHaveProperty('id');
  });
});
