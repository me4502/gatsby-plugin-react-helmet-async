/**
 * @see https://eslint.org/docs/user-guide/configuring
 */
const config = {
  /**
   * @see https://eslint.org/docs/user-guide/configuring#specifying-environments
   * @type {Object.<string, boolean>}
   */
  env: {
    browser: true,
    es2020: true,
    node: true,
  },

  /**
   * @see https://eslint.org/docs/user-guide/configuring#extending-configuration-files
   * @see https://github.com/standard/eslint-config-standard-react
   * @see https://github.com/standard/eslint-config-standard-with-typescript
   * @see https://github.com/benmosher/eslint-plugin-import
   * @see https://eslint.org/docs/user-guide/configuring#extending-configuration-files
   * @see https://www.npmjs.com/package/@typescript-eslint/eslint-plugin
   * @see https://github.com/prettier/eslint-config-prettier
   * @type {string[]}
   */
  extends: [
    'standard-react',
    'standard-with-typescript',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:import/errors',
    'plugin:import/typescript',
    'plugin:import/warnings',
  ],

  /**
   * @see https://eslint.org/docs/user-guide/configuring#specifying-globals
   * @type {Object.<string, any>}
   */
  globals: {
    __PATH_PREFIX__: true,
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },

  /**
   * @see https://eslint.org/docs/user-guide/configuring#specifying-parser
   * @see https://www.npmjs.com/package/@typescript-eslint/parser
   * @type {string}
   */
  parser: '@typescript-eslint/parser',

  /**
   * @see https://eslint.org/docs/user-guide/configuring#specifying-parser-options
   * @type {Object.<string, any>}
   */
  parserOptions: {
    ecmaFeatures: {
      impliedStrict: true,
      jsx: true,
    },
    ecmaVersion: 2020,
    project: './tsconfig.json',
    sourceType: 'module',
  },

  /**
   * @see https://eslint.org/docs/user-guide/configuring#configuring-plugins
   * @see https://github.com/yannickcr/eslint-plugin-react
   * @see https://github.com/standard/eslint-plugin-standard
   * @see https://eslint.org/docs/user-guide/configuring#configuring-plugins
   * @see https://www.npmjs.com/package/@typescript-eslint/eslint-plugin
   * @type {string[]}
   */
  plugins: ['@typescript-eslint', 'react'],

  /**
   * @see https://eslint.org/docs/user-guide/configuring#configuring-rules
   * @see https://github.com/yannickcr/eslint-plugin-react
   * @see https://www.npmjs.com/package/@typescript-eslint/eslint-plugin
   * @type {Object.<string, any>}
   */
  rules: {
    'comma-dangle': ['error', 'always-multiline'],
    '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
    '@typescript-eslint/no-explicit-any': 'off',
  },

  /**
   * @see https://eslint.org/docs/user-guide/configuring#adding-shared-settings
   * @type {Object.<string, any>}
   */
  settings: {
    react: {
      version: 'detect',
    },
  },
}

module.exports = config
