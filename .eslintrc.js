const ERROR = 2
const WARN = 1
const OFF = 0

/**
 * Not using `gatsby-plugin-eslint`, as it's outdated and doesn't really
 * accomplish anything that hasn't been taken care of already. Feel free to look
 * into it for yourself: https://www.gatsbyjs.org/packages/gatsby-plugin-eslint/
 *
 * @see https://eslint.org/docs/user-guide/configuring/
 * @type {eslint.BaseConfig}
 */
module.exports = {
  /**
   * @type {eslint.BaseConfig.env}
   */
  env: {
    browser: true,
    es2020: true,
    node: true,
  },

  /**
   * @see https://github.com/standard/eslint-config-standard-react
   * @see https://github.com/standard/eslint-config-standard-with-typescript
   * @see https://github.com/benmosher/eslint-plugin-import
   */
  extends: [
    'standard-react',
    'standard-with-typescript',
    'plugin:import/errors',
    'plugin:import/warnings',
    'prettier',
  ],

  globals: {
    __PATH_PREFIX__: true,
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },

  /**
   * @see https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/parser
   */
  parser: '@typescript-eslint/parser',

  /**
   * @type {eslint.BaseConfig.parserOptions}
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
   * @see https://github.com/yannickcr/eslint-plugin-react
   */
  plugins: ['react'],

  rules: {
    'comma-dangle': [WARN, 'always-multiline'],
    'no-cond-assign': [ERROR, 'always'],
    'quote-props': [WARN, 'consistent-as-needed'],
  },

  /**
   * @type {eslint.BaseConfig.settings}
   */
  settings: {
    react: {
      version: 'detect',
    },
  },

  overrides: [
    {
      files: ['*.ts', '*.tsx'],

      extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'plugin:import/typescript',
      ],

      /**
       * @see https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin
       */
      plugins: ['@typescript-eslint'],

      /**
       * @see https://github.com/yannickcr/eslint-plugin-react
       */
      rules: {
        'react/prop-types': OFF,
        '@typescript-eslint/consistent-type-definitions': [ERROR, 'type'],
        '@typescript-eslint/explicit-function-return-type': ERROR,
        '@typescript-eslint/require-await': OFF,
        '@typescript-eslint/strict-boolean-expressions': OFF,
      },
    },
  ],
}
