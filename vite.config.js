import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { createHtmlPlugin } from "vite-plugin-html";
// import { wrapperEnv } from "./src/utils/getEnv.js";
export default defineConfig((mode) => {
  const env = loadEnv(mode, process.cwd());
  console.log(env, "env");
  return {
    plugins: [
      react({
        babel: {
          plugins: ["@babel/plugin-transform-react-jsx"],
        },
      }),
      createHtmlPlugin({
        minify: true,
        /**
         * 在这里写entry后，你将不需要在`index.html`内添加 script 标签，原有标签需要删除
         * @default src/index.js
         */
        entry: "src/index.jsx",
        /**
         * 如果你想将 `index.html`存放在指定文件夹，可以修改它，否则不需要配置
         * @default index.html
         */
        template: "/public/index.html",
      }),
    ],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
      extensions: [".mjs", ".js", ",jsx", "json", ".ts", ".mts", ".tsx"],
    },
    server: {
      port: 8989,
      host: "localhost",
      cors: true,
      proxy: {
        "/api": {
          target: "https://mock.mengxuegu.com/mock/66e549da90f5322f879d823e",
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ""),
        },
      },
    },
    build: {
      outDir: "dist",
      cssCodeSplit: true,
      sourcemap: false,
      // terserOptions: {
      //   compress: {
      //     drop_console: true, // 生产环境下去除console
      //     drop_debugger: true, // 生产环境下去除debugger
      //   },
      // },
      // commonjsOptions: {
      //   transformMixedEsModules: true,
      // },
      // minify: "esbuild",
      rollupOptions: {
        output: {
          manualChunks: {
            // react: [],
          },
          // chunkFileNames: "assets/js/[name]-[hash].js",
          // entryFileNames: "assets/js/[name]-[hash].js",
          // assetFileNames: "assets/[ext]/[name]-[hash].[ext]",
        },
      },
    },
  };
});
