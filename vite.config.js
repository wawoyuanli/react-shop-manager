import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import { createHtmlPlugin } from 'vite-plugin-html'
export default defineConfig(mode => {
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
         * @default src/main.ts
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
      },
    },
    build: {
      commonjsOptions: {
        transformMixedEsModules: true,
      },
    },
    server: {
      port: 8989,
      host: 'localhost',
    },
  }
})
