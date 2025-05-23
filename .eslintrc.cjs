module.exports = {
  env: {
    node: true,
    es2020: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  extends: [
    'airbnb-base',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:prettier/recommended',
  ],
  plugins: ['@typescript-eslint', 'perfectionist', 'prettier'],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
      alias: {
        map: [['@', './src']],
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
      },
    },
  },
  rules: {
    'import/no-unresolved': 0,
    '@typescript-eslint/ban-ts-comment': 0,
    '@typescript-eslint/no-use-before-define': ['error', { variables: false }],
    '@typescript-eslint/no-var-requires': 0,
    '@typescript-eslint/no-unused-vars': ['error'],
    '@typescript-eslint/no-namespace': 0,
    '@typescript-eslint/no-explicit-any': 0,
    'arrow-body-style': 0,
    'global-require': 0,
    'import/extensions': 0,
    camelcase: 0,
    'import/no-extraneous-dependencies': 0,
    'import/prefer-default-export': 0,
    'lines-between-class-members': 0,
    'prettier/prettier': 'error',
    'no-await-in-loop': 0,
    'no-console': 0,
    'no-use-before-define': 0,
    'no-plusplus': 0,
    'no-restricted-syntax': 0,
    'import/order': 0,
    'max-len': [
      'error',
      {
        code: 150,
        ignoreComments: true,
        ignoreUrls: true,
      },
    ],
    // https://perfectionist.dev/rules/sort-jsx-props
    'perfectionist/sort-jsx-props': [
      'error',
      {
        type: 'natural',
        groups: ['dataComponent', 'keyRef', 'id', 'className', 'shorthand', 'data', 'unknown', 'multiline', 'callback'],
        customGroups: {
          dataComponent: 'data-component',
          keyRef: ['key', 'ref'],
          id: 'id',
          className: 'className',
          data: 'data-*',
          callback: 'on*',
        },
      },
    ],
    // https://perfectionist.dev/rules/sort-imports
    'perfectionist/sort-imports': [
      'error',
      {
        newlinesBetween: 'never',
        internalPattern: ['^@/.*'],
        groups: [
          ['builtin', 'external'],
          'internal',
          'internal-type',
          ['parent-type', 'sibling-type', 'index-type'],
          ['parent', 'sibling', 'index'],
          'object',
          'unknown',
          'style',
        ],
      },
    ],
    // https://perfectionist.dev/rules/sort-named-imports
    'perfectionist/sort-named-imports': ['error'],
  },
};
