import { config } from 'dotenv';
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

// Load environment variables from .env file
config();

type ServerConfig = {
  mockAccessToken: string;
};
interface CliArgs {
  'mock-access-token'?: string;
}

export function getServerConfig(): ServerConfig {
  const argv = yargs(hideBin(process.argv))
    .options({
      'mock-access-token': {
        type: 'string',
        description: 'mock API key (Personal Access Token)',
      },
    })
    .help()
    .version('0.2.1')
    .parseSync() as CliArgs;

  const argConfig: ServerConfig = {
    mockAccessToken: '',
  };
  if (argv['mock-access-token']) {
    argConfig.mockAccessToken = argv['mock-access-token'];
  } else if (process.env.MOCK_ACCESS_TOKEN) {
    argConfig.mockAccessToken = process.env.MOCK_ACCESS_TOKEN;
  }
  return argConfig;
}
