FROM node:lts-alpine

WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install --ignore-scripts

# Copy the rest of the code
COPY . .

# Build the TypeScript source code
RUN npm run build

# Expose port if needed (not required for stdio-based MCP)

# Run the MCP server
CMD [ "npm", "run", "server" ]