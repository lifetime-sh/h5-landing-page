import { build, defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';

const pageName = process.argv[2];
const mode = process.argv[3] || 'development';
console.log(pageName, mode,111111111);

if (!pageName) {
  console.error('请提供页面名称，如: pnpm run build:page meet-manage');
  process.exit(1);
}

const env = loadEnv(mode, process.cwd());

(async () => {
  await build(
    defineConfig({
      base: './',
      plugins: [vue()],
      build: {
        rollupOptions: {
          input: {
            [pageName]: resolve(__dirname, `../src/pages/${pageName}/index.html`),
          },
          output: {
            entryFileNames: 'assets/[name].[hash].js',
            chunkFileNames: 'assets/[name].[hash].js',
            assetFileNames: 'assets/[name].[hash].[ext]',
          },
        },
        outDir: `dist/${mode}/${pageName}`,
        emptyOutDir: true,
      },
      define: {
        __VITE_ENV__: JSON.stringify(env.VITE_ENV),
      },
    })
  );
})();
