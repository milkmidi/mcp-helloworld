#!/usr/bin/env node

import { McpServer, ResourceTemplate } from '@modelcontextprotocol/sdk/server/mcp.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import { z } from 'zod';
import { getEnvVar } from './utils/get-env-vars';

// Create an MCP server
const server = new McpServer({
  name: 'pg-mcp-server-hello',
  version: '1.0.0',
});

// Add a dynamic greeting resource
server.resource(
  'greeting',
  //
  new ResourceTemplate('greeting://{name}', { list: undefined }),
  async (uri, { name }) => ({
    contents: [
      {
        uri: uri.href,
        text: `Hello, ${name}!`,
      },
    ],
  }),
);

// Add an addition tool
server.tool(
  'say-mcp-hello',
  'say hello',
  {
    text: z.string(),
  },
  async ({ text }) => {
    return {
      content: [
        {
          type: 'text',
          text: String(`${text} world, env.MOCK_ACCESS_TOKEN: ${getEnvVar('MOCK_ACCESS_TOKEN')}}`),
        },
      ],
    };
  },
);

server.tool(
  'calculate-bmi',
  'calculate bmi',
  {
    weightKg: z.number(),
    heightM: z.number(),
  },
  async ({ weightKg, heightM }) => ({
    content: [
      {
        type: 'text',
        text: String(weightKg / (heightM * heightM)),
      },
    ],
  }),
);

// Start receiving messages on stdin and sending messages on stdout

async function runServer() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error('PG-MCP-Server running on stdio');
}

runServer().catch((error) => {
  console.error('Fatal error in main():', error);
  process.exit(1);
});
