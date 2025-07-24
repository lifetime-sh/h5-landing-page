# Vue 3 + TypeScript + Vite

基于 **Vue3 + Vite + TypeScript** 的 H5 多页面活动框架，支持独立页面打包、PostCSS px 转 vw、自动格式化、Git 提交校验等特性，适用于多入口 H5 活动页快速搭建。

## 📦 技术栈

- `Vue 3`
- `Vite 5+`
- `TypeScript 5+`
- `Pinia` 状态管理
- `ESLint 9+` + `Prettier` 代码规范
- `Husky + lint-staged` Git 提交校验
- `postcss-px-to-viewport` 自动转 vw 适配移动端

## 📁 项目结构

```
h5-landing-page/
├── public/
├── src/
│   ├── pages/
│   │   ├── home/
│   │   │   ├── index.html
│   │   │   └── index.ts
│   │   └── meetManage/
│   │       ├── index.html
│   │       └── index.ts
│   ├── components/
│   ├── assets/
│   ├── stores/
│   ├── utils/
│   └── style/
├── postcss.config.cjs
├── eslint.config.js
├── vite.config.ts
├── package.json
└── README.md
```

| 环境 | 整体打包          | 单页面打包                             | 启动开发环境    |
| ---- | ----------------- | -------------------------------------- | --------------- |
| 开发 | `pnpm build`      | `pnpm run build:page meet-manage`      | `pnpm dev`      |
| 测试 | `pnpm build:test` | `pnpm run build:page:test meet-manage` | `pnpm dev:test` |
| 生产 | `pnpm build:prod` | `pnpm run build:page:prod meet-manage` | `pnpm dev:prod` |

## 📥 安装依赖

```bash
pnpm install
```

## 🚀 本地开发

```bash
pnpm dev:home
pnpm dev:meetManage
```

## 📦 打包构建

```bash
pnpm build:home
pnpm build:meetManage
```

构建后输出路径：

```
dist/
└── meetManage/
    ├── index.html
    └── assets/
```

## 🧰 配置说明

### ✅ 多页面配置

```ts
// vite.config.ts
const pages = {
  home: resolve(__dirname, 'src/pages/home/index.html'),
  meetManage: resolve(__dirname, 'src/pages/meetManage/index.html')
}
```

```ts
// build 配置
build: {
  rollupOptions: {
    input: pages
  }
}
```

### ✅ px 转 vw 配置

```js
// postcss.config.cjs
module.exports = {
  plugins: {
    'postcss-px-to-viewport': {
      viewportWidth: 750,
      unitPrecision: 5,
      propList: ['*'],
      selectorBlackList: [],
      exclude: [/node_modules/],
      minPixelValue: 1,
      mediaQuery: false
    }
  }
}
```

## ⚠️ 注意事项

1. `postcss.config.js` 改为 `postcss.config.cjs`
2. ESLint v9+ 改为使用 `eslint.config.js`
3. 无类型插件需加 `// @ts-ignore` 或声明模块
4. Git 提交时自动格式化+校验，失败会回滚

## 🧪 Git 提交校验

```bash
pnpm prepare  # 初始化 husky hooks
pnpm precommit  # 手动执行 lint-staged（提交时会自动执行）
```

## 📜 可选命令

```bash
pnpm lint
pnpm format
```
