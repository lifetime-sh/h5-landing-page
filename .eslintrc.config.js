// eslint.config.js
import tsPlugin from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import globals from 'globals';
import js from '@eslint/js';

export default [
  // 基础配置
  {
    ignores: [
      'dist/**',
      'node_modules/**',
      'vite.config.ts',
      'vitest.config.ts',
      '**/*.d.ts',
    ],
  },

  // JavaScript 配置
  {
    files: ['**/*.js'],
    ...js.configs.recommended,
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },

  // TypeScript 配置
  {
    files: ['**/*.ts', '**/*.tsx'],
    plugins: {
      '@typescript-eslint': tsPlugin,
    },
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: './tsconfig.json',
      },
    },
    rules: {
      // 强制类型声明
      '@typescript-eslint/typedef': [
        'error',
        {
          arrowParameter: true,
          variableDeclaration: true,
          memberVariableDeclaration: true,
          parameter: true,
        },
      ],
      // 禁止隐式 any
      '@typescript-eslint/no-explicit-any': 'error',
      // 禁止推断类型
      '@typescript-eslint/no-inferrable-types': 'off',
      // 其他规则
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': 'error',
    },
  },
];
