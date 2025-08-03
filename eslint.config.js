import js from '@eslint/js';
import globals from 'globals';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import prettier from 'eslint-plugin-prettier';
import tseslint from 'typescript-eslint';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import { globalIgnores } from 'eslint/config';
import eslintPluginImport from 'eslint-plugin-import'; 
import jsxA11y from 'eslint-plugin-jsx-a11y';

export default tseslint.config([
  globalIgnores(['dist', 'node_modules']),
  js.configs.recommended,
  {
    files: ['**/*.{ts,tsx}'],
    plugins: {
      '@typescript-eslint': tsPlugin,
      import: eslintPluginImport,
      react,
      prettier,
      'jsx-a11y': jsxA11y,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    extends: ['plugin:import/recommended', 'plugin:import/typescript', 'plugin:jsx-a11y/recommended'],
    rules: {
      'import/order': [
        'error',
        {
          groups: [['builtin', 'external'], 'internal', 'sibling', 'parent', 'index', 'unknown', 'object', 'type'],
          'newlines-between': 'always-and-inside-groups',
          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
        },
      ],
      'no-shadow': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-shadow': 'error',
      '@typescript-eslint/no-unused-vars': 'error',
      'no-param-reassign': 'off',
      'prefer-const': 'error',
      'prettier/prettier': 'error',
      'react-hooks/exhaustive-deps': 'error',
      'react/prop-types': 'off',
      'react/jsx-props-no-spreading': 'off',
      'consistent-return': 'off',
      '@typescript-eslint/naming-convention': [
        'error',
        {
          selector: 'default',
          format: ['camelCase', 'strictCamelCase', 'PascalCase', 'StrictPascalCase', 'snake_case', 'UPPER_CASE'],
          leadingUnderscore: 'allow',
          trailingUnderscore: 'allow',
        },
        {
          selector: 'objectLiteralProperty',
          format: null,
        },
        {
          selector: [
            'classProperty',
            'objectLiteralProperty',
            'typeProperty',
            'classMethod',
            'objectLiteralMethod',
            'typeMethod',
            'accessor',
            'enumMember',
          ],
          format: null,
          modifiers: ['requiresQuotes'],
        },
        {
          selector: 'interface',
          format: ['PascalCase'],
          prefix: ['I'],
        },
        {
          selector: 'typeAlias',
          format: ['PascalCase'],
          custom: {
            regex: '^[A-Z][a-z][A-Za-z\\d]*$',
            match: true,
          },
        },
      ],
    },
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        jsx: true,
      },
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
  {
    rules: {},
    files: ['**/*.js'],
  },
]);
