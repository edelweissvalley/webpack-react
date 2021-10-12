import globals from 'globals';
import pluginJs from '@eslint/js';
import tsEslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import sonarjs from 'eslint-plugin-sonarjs';
import reactHooks from 'eslint-plugin-react-hooks';
import pluginQuery from '@tanstack/eslint-plugin-query';
import love from 'eslint-config-love';
import tsParser from '@typescript-eslint/parser';
import stylistic from '@stylistic/eslint-plugin';

export default [
  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    ignores: ['**/*.test.{js,mjs,cjs,ts,jsx,tsx}'],
    languageOptions: {
      globals,
      parser: tsParser,
      ecmaVersion: 'latest',
      sourceType: 'module',

      parserOptions: {
        project: 'tsconfig.json',
        tsconfigRootDir: './',
      },
    },

    rules: {
      'curly': ['error', 'all'],
      'max-lines': 'error',
      'no-console': ['error'],
    },

    settings: {
      react: {
        version: 'detect',
      },

      'import/resolver': {
        typescript: {},
      },
    },
  },

  {
    plugins: {
      '@stylistic': stylistic,
    },

    rules: {
      '@stylistic/comma-dangle': ['error', {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'never',
      }],
      '@stylistic/indent': ['error', 2],
      '@stylistic/eol-last': ['error', 'always'],
      '@stylistic/jsx-quotes': ['error', 'prefer-double'],
      "@stylistic/jsx-closing-bracket-location": 'error',
      '@stylistic/jsx-curly-brace-presence': ['error', 'never'],
      '@stylistic/jsx-first-prop-new-line': ['error', 'multiline'],
      '@stylistic/jsx-indent': ['error', 2],
      '@stylistic/jsx-max-props-per-line': ['error', {
        when: 'multiline',
      }],
      '@stylistic/jsx-props-no-multi-spaces': 'error',
      '@stylistic/jsx-tag-spacing': ['error', {
        beforeSelfClosing: 'always',
      }],
      '@stylistic/jsx-wrap-multilines': ['error', {
        prop: 'parens-new-line',
        return: 'parens-new-line',
      }],
      '@stylistic/max-len': ['error', {
        code: 120,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true,
      }],
      '@stylistic/max-statements-per-line': ['error'],
      '@stylistic/member-delimiter-style': ['error', {
        multiline: {
          delimiter: 'semi',
          requireLast: true,
        },
        singleline: {
          delimiter: 'semi',
          requireLast: false,
        },
        multilineDetection: 'brackets',
      }],
      '@stylistic/no-multiple-empty-lines': ['error', {
        max: 1,
      }],
      '@stylistic/no-trailing-spaces': ['error'],
      '@stylistic/object-curly-spacing': ['error', 'always'],
      '@stylistic/padding-line-between-statements': ['error', {
        blankLine: 'always',
        prev: '*',
        next: 'return',
      }, {
        blankLine: 'always',
        prev: '*',
        next: 'block',
      }, {
        blankLine: 'always',
        prev: 'block',
        next: '*',
      }, {
        blankLine: 'always',
        prev: '*',
        next: 'block-like',
      }, {
        blankLine: 'always',
        prev: 'block-like',
        next: '*',
      }],
      '@stylistic/quotes': ['error', 'single', {
        avoidEscape: true,
      }],
      '@stylistic/semi': ['error', 'always'],
      '@stylistic/space-before-function-paren': ['error', {
        anonymous: 'always',
        named: 'never',
        asyncArrow: 'always',
      }],
    },
  },

  pluginJs.configs.recommended,
  ...tsEslint.configs.recommended,

  pluginReact.configs.flat.recommended,
  {
    rules: {
      'react/react-in-jsx-scope': 'off',
    },
  },

  sonarjs.configs.recommended,
  {
    rules: {
      'sonarjs/no-selector-parameter': 0,
      'sonarjs/void-use': 0,
    },
  },

  {
    plugins: {
      'react-hooks': reactHooks,
    },

    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-hooks/exhaustive-deps': 0,
      'react-hooks/rules-of-hooks': 'error',
    },
  },

  ...pluginQuery.configs['flat/recommended'],

  love,
  {
    rules: {
      complexity: ['error', 20],

      'eslint-comments/require-description': 0,

      '@typescript-eslint/init-declarations': 0,
      '@typescript-eslint/no-magic-numbers': 0,
      '@typescript-eslint/strict-boolean-expressions': 0,

      'import/default': 2,
      'import/no-default-export': 2,
      'import/order': ['error', {
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
        groups: ['builtin', 'external', 'sibling', 'parent', 'object', 'internal', 'index'],
        pathGroups: [{
          pattern: '@src/**',
          group: 'internal',
          position: 'after',
        }],
        'newlines-between': 'always',
      }],

      'promise/always-return': [2, {
        ignoreLastCallback: true,
      }],

      // TEMPORARY !!!!
      '@typescript-eslint/no-unsafe-type-assertion': 0,
      '@typescript-eslint/use-unknown-in-catch-callback-variable': 0,
      'eslint-comments/no-unlimited-disable': 0,
      '@typescript-eslint/require-await': 0,
    },
  },
];
