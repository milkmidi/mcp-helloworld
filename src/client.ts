import { Client } from '@modelcontextprotocol/sdk/client/index.js';
import { StdioClientTransport } from '@modelcontextprotocol/sdk/client/stdio.js';
import { ListToolsResultSchema } from '@modelcontextprotocol/sdk/types.js';

async function main() {
  const transport = new StdioClientTransport({
    command: 'node',
    args: ['./build/server.js', '--MOCK_ACCESS_TOKEN', 'mockAccessToken'],
  });

  const client = new Client({
    name: 'example-client',
    version: '1.0.0',
  });

  await client.connect(transport);

  // List resources
  const resources = await client.listResources();
  console.log('resources', resources);

  // Read a resource
  const resource = await client.readResource({
    uri: 'greeting://helloworld',
  });
  console.log(resource);

  const response = await client.request({ method: 'tools/list' }, ListToolsResultSchema);
  // console.log(JSON.stringify(response, null, 2));
  console.log(response);

  // Call a tool
  const helloResult = await client.callTool({
    name: 'say-mcp-hello',
    arguments: {
      text: 'Hi, MCP',
    },
  });
  console.log('helloResult', helloResult);
  const bmiResult = await client.callTool({
    name: 'calculate-bmi',
    arguments: {
      weightKg: 84,
      heightM: 1.8,
    },
  });
  console.log('bmiResult', bmiResult);
}

main().catch((error) => {
  console.error('Error:', error);
  process.exit(1);
});
