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
       'vue/no-template-shadow': 'off',
    'vue/multi-word-component-names': ['off'],
    '@typescript-eslint/no-explicit-any': ['off'], // 关闭any类型时的警告
    '@typescript-eslint/ban-ts-ignore': ['off'], // 允许使用ts-ignore
    '@typescript-eslint/ban-ts-comment': 'off',
    'vue/no-multiple-template-root': 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'off' : 'off', // 非开发环境下禁止使用console
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off', // 非开发环境下禁止使用debugger
    'no-alert': process.env.NODE_ENV === 'production' ? 'error' : 'off', // 非开发环境下禁止使用alert
    'no-useless-escape': 'off',
    'vue/no-v-model-argument': 'off',
    'vue/html-self-closing': 0,
    'vue/no-v-for-template-key': 'off',
    'indent': [
      // 缩进，2 个空格缩进
      'error',
      2,
      {
        'SwitchCase': 1,
        'MemberExpression': 1 // 多行属性链缩进
      }
    ],
    'quotes': [
      // 使用单引号
      'error',
      'single',
      {
        'allowTemplateLiterals': true
      }
    ],
    // 'no-extra-parens': 'error', // 禁止使用多余的圆括号
    'no-extra-semi': 'error', // 不允许使用不必要的分号
    'no-irregular-whitespace': [
      // 禁止使用不规则的空白符
      'error',
      {
        'skipStrings': true,
        'skipTemplates': true,
        'skipComments': true
      }
    ],
    'no-template-curly-in-string': 'error', // 不允许在常规字符串中使用模板文字占位符语法
    'consistent-return': 'off', // 要求return语句始终或从不指定值
    'no-empty-pattern': 'error', // 不允许空的解构模式
    'no-fallthrough': 'error', // 在case语句中尽量加break
    'no-implied-eval': 'error', // 禁止使用类eval的函数
    'no-self-assign': [
      // 消除自我分配
      'error',
      {
        'props': true
      }
    ],
    'arrow-parens': 'error', // 强制箭头函数参数用括号括起来
    'arrow-spacing': 'error', // 箭头函数的箭头前和后各加一个空格
    'array-bracket-spacing': [
      // 数组前后增加空格
      'error',
      'never',
      {
        'singleValue': false
      }
    ],
    'block-spacing': [
      // 如果代码块是单行的时候，代码块内部前后需要留一个空格
      'error',
      'always'
    ],
    'comma-dangle': [
      // 在定义对象或数组时，最后一项不能加逗号
      'error',
      'never'
    ],
    'generator-star-spacing': [
      'error',
      {
        // 强制执行一个单独的位置*
        'before': true,
        'after': true
      }
    ],
    'no-class-assign': 'error', // 变量名不要和class名重名
    'no-confusing-arrow': 'error',
    'no-const-assign': 'error', // const申明的变量禁止修改
    'no-dupe-class-members': 'error', // class中的成员禁止重名
    'no-duplicate-imports': 'off', // 此规则要求从单个模块进行的所有导入都以单一import语句存在
    'no-new-symbol': 'error', // 防止Symbol与new操作员的意外呼叫
    'no-this-before-super': 'error', // 在调用super之前不能使用this对象
    'no-useless-computed-key': 'error', // 禁止不必要地使用计算属性键
    'no-useless-rename': 'error', // 不允许将导入、导出和解构分配重命名为相同的名称
    'no-var': 'error', // 阻止var使用或鼓励改为使用const或let
    'no-multiple-empty-lines': [
      // 空行不能够超过2行
      'error',
      {
        'max': 1,
        'maxEOF': 1
      }
    ],
    'no-trailing-spaces': [
      // 行末禁止加空格
      'error',
      {
        'skipBlankLines': true
      }
    ],
    'no-whitespace-before-property': 'error', // 对象和属性之间留出一致空白
    'space-before-blocks': 'error', // 代码块前面需要加空格
    'key-spacing': [
      // key和value之间的空白，冒号前不要空格，冒号后面需要一个空格
      'error',
      {
        'beforeColon': false,
        'afterColon': true
      }
    ],
    'keyword-spacing': [
      // 关键字间距
      'error',
      {
        'before': true,
        'after': true
      }
    ],
    'space-unary-ops': [
      // 一元操作符前后是否需要加空格，单词类操作符需要加，而非单词类操作符不用加
      'error',
      {
        'words': true,
        'nonwords': false
      }
    ],
    'spaced-comment': 'error', // 注释符号｀／*｀ ｀／／｀，后面需要留一个空格
    'space-infix-ops': 'error', // 操作符前后需要加空格
    // 强制数组方法的回调函数中有 return 语句
    'comma-spacing': [
      'error',
      {
        // 在写逗号时，逗号前面不需要加空格，而逗号后面需要添加空格
        'before': false,
        'after': true
      }
    ],
    'comma-style': [
      // 如果逗号可以放在行首或行尾时，那么请放在行尾
      'error',
      'last'
    ],
    'curly': ['error'],
    'array-callback-return': 'error',
    // 强制把变量的使用限制在其定义的作用域范围内
    'block-scoped-var': 'error',
    // 指定程序中允许的最大环路复杂度
    'complexity': ['error', { 'max': 20 }],
    // 要求 switch 语句中有 default 分支
    'default-case': 'error',
    // 强制 “for” 循环中更新子句的计数器朝着正确的方向移动
    'for-direction': 'error',
    // 强制getter函数中出现return语句
    'getter-return': 'error',
    // 禁止使用异步函数作为 Promise executor
    'no-async-promise-executor': 'error',
    // 禁止在循环中出现 await
    // 'no-await-in-loop': 'error',
    // 禁用 arguments.caller或arguments.callee
    'no-caller': 'error',
    // 不允许在case子句中使用词法声明
    'no-case-declarations': 'error',
    // 禁止与 -0 进行比较
    'no-compare-neg-zero': 'error',
    // 禁止条件表达式中出现赋值操作符
    'no-cond-assign': 'error',
    // 禁止在条件中使用常量表达式
    'no-constant-condition': 'error',
    // 禁止在正则表达式中使用控制字符
    'no-control-regex': 'error',
    // 禁止除法操作符显式的出现在正则表达式开始的位置
    'no-div-regex': 'error',
    // 禁止 function 定义中出现重名参数
    'no-dupe-args': 'error',
    // 禁止对象字面量中出现重复的 key
    'no-dupe-keys': 'error',
    // 禁止出现重复的 case 标签
    'no-duplicate-case': 'error',
    // 禁止在正则表达式中使用空字符集
    'no-empty-character-class': 'error',
    // 禁止出现空函数
    'no-empty-function': 'error',
    // 禁止出现空语句块
    'no-empty': 'error',
    // 禁止对 catch 子句的参数重新赋值
    'no-ex-assign': 'error',
    // 禁止不必要的布尔转换
    'no-extra-boolean-cast': 'error',
    // 禁止数字字面量中使用前导和末尾小数点
    'no-floating-decimal': 'error',
    // 禁止对 function 声明重新赋值
    'no-func-assign': 'error',
    // 禁止对原生对象或只读的全局对象进行赋值
    'no-global-assign': 'error',
    // 禁止在嵌套的块中出现变量声明或 function 声明
    'no-inner-declarations': 'error',
    //  禁止 RegExp 构造函数中存在无效的正则表达式字符串
    'no-invalid-regexp': 'error',
    // 禁止使用多个空格
    'no-multi-spaces': 'error',
    // 禁止对String,Number和Boolean使用new操作符
    'no-new-wrappers': 'error',
    // 禁止把全局对象作为函数调用
    'no-obj-calls': 'error',
    // 禁止多次声明同一变量
    'no-redeclare': 'error',
    // 禁止正则表达式字面量中出现多个空格
    'no-regex-spaces': 'error',
    // 禁止在 return 语句中使用赋值语句
    'no-return-assign': 'error',
    // 禁止将标识符定义为受限的名字
    'no-shadow-restricted-names': 'error',
    // 禁止变量声明与外层作用域的变量同名
    'no-shadow': 'error',
    // 禁用稀疏数组
    'no-sparse-arrays': 'error',
    // 禁止出现令人困惑的多行表达式
    'no-unexpected-multiline': 'error',
    // 禁用一成不变的循环条件
    'no-unmodified-loop-condition': 'error',
    // 禁止在 return、throw、continue 和 break 语句之后出现不可达代码
    'no-unreachable': 'error',
    // 禁止在 finally 语句块中出现控制流语句
    'no-unsafe-finally': 'error',
    // 禁止对关系运算符的左操作数使用否定操作符
    'no-unsafe-negation': 'error',
    // 禁止由于 await 或 yield的使用而可能导致出现竞态条件的赋值
    'require-atomic-updates': 'error',
    // 禁止使用不带 await 表达式的 async 函数
    'require-await': 'error',
    // 要求使用 isNaN() 检查 NaN
    'use-isnan': 'error',
    // 强制 typeof 表达式与有效的字符串进行比较
    'valid-typeof': 'error',
    // 要求 IIFE 使用括号括起来
    'wrap-iife': 'error'
    },
  },
];
