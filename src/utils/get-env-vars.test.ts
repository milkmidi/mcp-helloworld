import { getEnvVar } from './get-env-vars';

describe('getEnvVar', () => {
  const originalEnv = process.env;
  const originalArgv = process.argv;

  beforeEach(() => {
    process.env = { ...originalEnv };
    process.argv = [...originalArgv];
  });

  afterEach(() => {
    process.env = originalEnv;
    process.argv = originalArgv;
  });

  it('should return value from process.env', () => {
    process.env.TEST_ENV = 'envValue';
    expect(getEnvVar('TEST_ENV')).toBe('envValue');
  });

  it('should return value from command line argument with equals', () => {
    process.env.TEST_ENV = '';
    process.argv = [...originalArgv.slice(0, 2), '--test-env=cliValue'];
    expect(getEnvVar('TEST_ENV')).toBe('cliValue');
  });

  it('should return value from command line argument with space', () => {
    process.env.TEST_ENV = '';
    process.argv = [...originalArgv.slice(0, 2), '--test-env', 'cliValue2'];
    expect(getEnvVar('TEST_ENV')).toBe('cliValue2');
  });

  it('should return undefined if not found', () => {
    process.env.TEST_ENV = '';
    process.argv = [...originalArgv.slice(0, 2)];
    expect(getEnvVar('TEST_ENV')).toBeUndefined();
  });

  it('should handle camelCase and underscores', () => {
    process.env.MY_TEST_VAR = '';
    process.argv = [...originalArgv.slice(0, 2), '--my-test-var=someValue'];
    expect(getEnvVar('MY_TEST_VAR')).toBe('someValue');
  });
});
