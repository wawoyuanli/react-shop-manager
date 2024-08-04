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
        // '@ant-design/icons-vue$': resolve('./src/assets/antd/icons.js')
      },
    },
    build: {
      commonjsOptions: {
        transformMixedEsModules: true,
      },
    },
  	server: {
			host: "0.0.0.0", // 服务器主机名，如果允许外部访问，可设置为"0.0.0.0"
			port: 8089,
			open: true,
			cors: true,
			// https: false,
			// 代理跨域（mock 不需要配置，这里只是个事列）
			proxy: {
				"/api": {
					target: "https://mock.mengxuegu.com/mock/62abda3212c1416424630a45", // easymock
					changeOrigin: true,
					rewrite: path => path.replace(/^\/api/, "")
				}
			}
		},
  }
})
