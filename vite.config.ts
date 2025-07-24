import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// 读取环境变量
const entryName = process.env.ENTRY_NAME || 'main' // 默认使用 main
const mode = process.env.MODE || 'development'   // 默认开发环境

const entryHtml = entryName
  ? resolve(__dirname, `public/${entryName}.html`)  // 使用指定页面的 HTML
  : resolve(__dirname, 'index.html')              // 默认 HTML

// 加载环境变量文件（根据 Vite 的 mode 加载不同的环境配置）
const env = loadEnv(mode, process.cwd(), '')

export default defineConfig({
  plugins: [vue()],
  build: {
    rollupOptions: {
      // 多页面配置：按入口名称加载 HTML 文件
      input: {
        [entryName]: entryHtml,
      },
      output: {
        // 输出路径：根据页面名称输出到不同文件夹
        entryFileNames: () => {
          return entryName !== 'main'
            ? `${entryName}/assets/[name].[hash].js`
            : `assets/[name].[hash].js`
        },
        chunkFileNames: 'assets/[name].[hash].js',
        assetFileNames: 'assets/[name].[hash].[ext]',
      }
    },
    outDir: `dist/${mode}`,  // 根据模式输出不同目录：dist/development、dist/production
    emptyOutDir: true,       // 每次构建前清空输出目录
  },
  define: {
    __VITE_ENV__: JSON.stringify(env.VITE_ENV),  // 根据环境传递环境变量
  }
})
