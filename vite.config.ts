import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'
import { resolve } from 'path'
// @ts-ignore: 插件无类型声明
const entryName = process.env.ENTRY_NAME
const entryHtml = entryName
  ? resolve(__dirname, `public/${entryName}.html`)
  : resolve(__dirname, 'index.html')


export default defineConfig({
 plugins: [vue()],
  build: {
    rollupOptions: {
      input: {
        [entryName || 'main']: entryHtml
      },
      output: {
        // 👇 修改输出路径结构，让它变成：dist/xxx/index.html
        entryFileNames: () => {
          return entryName
            ? `${entryName}/assets/[name].[hash].js`
            : `assets/[name].[hash].js`
        },
        chunkFileNames: 'assets/[name].[hash].js',
        assetFileNames: 'assets/[name].[hash].[ext]'
      }
    },
    outDir: 'dist',
    emptyOutDir: true
  }
})