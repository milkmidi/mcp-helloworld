/* eslint-disable prefer-destructuring */

const toKebabCase = (str: string) => {
  return str
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/_/g, '-')
    .toLowerCase();
};

export const getEnvVar = (name: string) => {
  const value = process.env[name];
  if (value) {
    return value;
  }
  const args = process.argv.slice(2);
  const kebabCaseName = toKebabCase(name);
  // Check for command line arguments
  const envVar = args.find((arg) => arg.startsWith(`--${kebabCaseName}=`));
  if (envVar) {
    return envVar.split('=')[1];
  }

  // Check for command line arguments without equals
  for (let i = 0; i < args.length; i++) {
    const argsValue = args[i];
    if (argsValue === `--${kebabCaseName}` && i + 1 < args.length) {
      return args[i + 1];
    }
  }
  return undefined;
};
