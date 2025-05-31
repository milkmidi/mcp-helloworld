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
      "--mock-access-token=YOUR-MOCK-TOKEN",
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

## Author

- **Name**: milkmidi 
- **GitHub**: [milkmidi](https://github.com/milkmidi)

## License

This project is licensed under the MIT License.

Copyright (c) 2025 Rix Beck

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.