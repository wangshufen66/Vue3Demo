import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 4000, // 你需要定义的端口号
    // target:api地址
    proxy: {
      '/api': {
        target: 'http://localhost:3008/',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      },
    },
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src/'),
    },
  },
  plugins: [vue()],
});
