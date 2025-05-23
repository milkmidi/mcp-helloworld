# mcp-helloworld
Node.js server implementing Model Context Protocol (MCP) for "HelloWorld".

## Features
- Say Hello world
- BMI calculator

**Note**: The Server will only for development.

## Tools
- **hello**
  - Input: `hello` (string)
  - Output: "world"

- **calculate-bmi**
  - Inputs:
    - `weightKg` (number): Weight
    - `heightM` (number): heightM

#### Using Node.js
1. Build
```bash
npm run build
```

2. Add the following configuration to your AI platform settings:
```json
{
  "mcp-helloworld": {
    "name": "mcp-helloworld",
    "protocol": "stdio",
    "command": "node",
    "args": [
      "path/mcp-helloworld/build/index.js",
      "--MOCK_ACCESS_TOKEN",
      "<YOUR_MOCK_TOKEN>"
    ]
  }
}
```


#### Using Docker
1. Build the container image:
```bash
docker build -t mcp-helloworld .
```

2. Add the following configuration to your AI platform settings:
```json
{
  "mcp-hello": {
    "command": "docker",
    "args": [
      "run",
      "-i",
      "--rm",
      "-e",
      "MOCK_ACCESS_TOKEN"
    ],
    "env": {
      "MOCK_ACCESS_TOKEN": "<YOUR_MOCK_TOKEN>"
    }
  }
}
```

