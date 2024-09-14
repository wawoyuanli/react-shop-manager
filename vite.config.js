import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import { createHtmlPlugin } from 'vite-plugin-html'
// import { wrapperEnv } from "./src/utils/getEnv.js";
export default defineConfig(mode => {
  // const viteEnv = wrapperEnv(env);
  return {
    plugins: [
      react({
        babel: {
          plugins: ['@babel/plugin-transform-react-jsx'],
        },
      }),
      createHtmlPlugin({
        minify: true,
        /**
         * 在这里写entry后，你将不需要在`index.html`内添加 script 标签，原有标签需要删除
         * @default src/index.js
         */
        entry: 'src/index.jsx',
        /**
         * 如果你想将 `index.html`存放在指定文件夹，可以修改它，否则不需要配置
         * @default index.html
         */
        template: '/index.html',
      }),
    ],
    resolve: {
      alias: {
        '@': resolve(__dirname, './src'),
        // '@ant-design/icons-vue$': resolve('./src/assets/antd/icons.js')
      },
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
      commonjsOptions: {
        transformMixedEsModules: true,
      },
      outDir: 'dist',
      minify: 'esbuild',
      rollupOptions: {
        output: {
          chunkFileNames: 'assets/js/[name]-[hash].js',
          entryFileNames: 'assets/js/[name]-[hash].js',
          assetFileNames: 'assets/[ext]/[name]-[hash].[ext]',
        },
      },
    },
  }
})
