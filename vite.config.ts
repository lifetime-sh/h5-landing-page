
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// 如需多个页面，可放开以下代码
// import fs from 'fs'

// // 自动扫描 src/pages 下的页面
// function getInputEntries() {
//   const pagesDir = path.resolve(__dirname, 'src/pages')
//   const entries: Record<string, string> = {}

//   fs.readdirSync(pagesDir).forEach((dir) => {
//     const fullPath = path.join(pagesDir, dir, 'index.html')
//     if (fs.existsSync(fullPath)) {
//       entries[dir] = fullPath
//     }
//   })

//   return entries
// }


export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
    '@': path.resolve(__dirname, 'src')
  }
  },
  //  build: {
  //     rollupOptions: {
  //       input: getInputEntries(), // 动态设置多入口
  //     },
  //     outDir: 'dist', // 输出目录
  //     emptyOutDir: true, // 打包前清空
  //   },
})
