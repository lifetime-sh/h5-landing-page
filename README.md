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

## 📥 安装依赖

```bash
pnpm install
```

## 🚀 本地开发

```bash
pnpm dev
```

## 📦 打包构建

```bash
pnpm build
```

构建后输出路径：

```
dist/
└──
   ├── index.html
   └── assets/
```

## 🧰 配置说明

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
