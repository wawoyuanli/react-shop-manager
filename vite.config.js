import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
export default defineConfig({
  plugins: [
    react(),
    // react({
    //   babel: {
    //     plugins: ['@babel/plugin-transform-react-jsx'],
    //   },
    // }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
    // alias: {
    //   find: '@',
    //   replacement: path.resolve(__dirname, 'src'),
    // },
    extensions: ['.js', '.json', '.ts', '.tsx', '.jsx', '.less'],
  },
  server: {
    port: 8989,
    host: 'localhost',
    cors: true,
    proxy: {
      '/api': {
        target: 'https://mock.mengxuegu.com/mock/66e549da90f5322f879d823e',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, ''),
      },
    },
  },
  build: {
    outDir: 'dist',
    // cssCodeSplit: true,
    // sourcemap: false,
    terserOptions: {
      compress: {
        drop_console: true, // 生产环境下去除console
        drop_debugger: true, // 生产环境下去除debugger
      },
    },
    // commonjsOptions: {
    //   transformMixedEsModules: true,
    // },
    minify: 'terser',
    rollupOptions: {
      // external: ['node_modules'],
      // output: {
      //   manualChunks: {
      //     // react: [],
      //   },
      //   chunkFileNames: 'assets/js/[name]-[hash].js',
      //   entryFileNames: 'assets/js/[name]-[hash].js',
      //   assetFileNames: 'assets/[ext]/[name]-[hash].[ext]',
      // },
    },
  },
  css: {
    preprocessorOptions: {
      less: {
        math: 'always',
        additionalData: `@import "@/styles/common.less"`,
        javascriptEnabled: true,
      },
    },
  },
})
