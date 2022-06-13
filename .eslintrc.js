const path = require('path');
module.exports = {
  root: true,
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  plugins: [
    '@typescript-eslint',
    'import',
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:prettier/recommended',
    'plugin:react/recommended',
    'prettier', // enables eslint-plugin-prettier and eslint-config-prettier
  ],
  env: {
    browser: true,
    es2020: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
    ecmaFeatures: {
      jsx: true, // Allows for the parsing of JSX
    },
    project: path.resolve(__dirname, './tsconfig.json'),
    tsconfigRootDir: __dirname,
  },
  rules: {
    // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-non-null-assertion': 'warn',
    '@typescript-eslint/no-empty-function': 'warn',
    '@typescript-eslint/no-var-requires': 'warn',
    'react/prop-types': 'off',
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    'react/no-unescaped-entities': 'warn',
    '@typescript-eslint/ban-types': 'warn',
    '@typescript-eslint/explicit-module-boundary-types': 'off',

    // Imports
    'import/no-duplicates': 'error',
    'import/no-named-as-default': 'off',
    'import/no-named-as-default-member': 'off',

    'prettier/prettier': 'warn',
  },
  settings: {
    react: {
      version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
        project: 'tsconfig.json',
      },
      node: {
        extensions: ['.ts', '.tsx'],
      },
    },
  },
};
