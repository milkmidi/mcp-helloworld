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

## Build
Docker build:

```bash
docker build -t pg-mcp/helloworld .
```

### Docker
```json
{
  "pg-mcp-server-hello": {
    "command": "docker",
    "args": [
      "run",
      "-i",
      "--rm",
      "-e",
      "MOCK_ACCESS_TOKEN",
      "-v",
      "{Your_local_path}:/config",
      "pg-mcp/helloworld"
    ],
    "env": {
      "MOCK_ACCESS_TOKEN": "<YOUR_MOCK_TOKEN>"
    }
  }
}
```

