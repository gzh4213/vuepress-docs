# vite
官方文档：[Vite中文网](https://vitejs.cn/)

在浏览器支持 ES 模块之前，JavaScript 并没有提供的原生机制让开发者以模块化的方式进行开发。这也正是我们对 “打包” 这个概念熟悉的原因：使用工具抓取、处理并将我们的源码模块串联成可以在浏览器中运行的文件。

当我们开始构建越来越大型的应用时，需要处理的 JavaScript 代码量也呈指数级增长。包含数千个模块的大型项目相当普遍。我们开始遇到性能瓶颈 —— 使用 JavaScript 开发的工具通常需要很长时间（甚至是几分钟！）才能启动开发服务器，即使使用 HMR，文件修改后的效果也需要几秒钟才能在浏览器中反映出来。如此循环往复，迟钝的反馈会极大地影响开发者的开发效率和幸福感。

Vite 旨在利用生态系统中的新进展解决上述问题：浏览器开始原生支持 ES 模块，且越来越多 JavaScript 工具使用编译型语言编写。

## 优势
* 冷服务   默认的构建目标浏览器是能 在 script 标签上支持原生 ESM 和 原生 ESM 动态导入
* HMR  速度快到惊人的 模块热更新（[HMR](https://vitejs.cn/guide/features.html#hot-module-replacement)）
* Rollup打包  它使用 [Rollup](https://rollupjs.org/guide/en/) 打包你的代码，并且它是预配置的 并且支持大部分rollup插件

## 基本配置
```js
// vite.config.js
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from "@vitejs/plugin-vue-jsx";
import { viteMockServe } from 'vite-plugin-mock'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  // 插件
  plugins: [
    vue(),
    // vue 支持jsx
    vueJsx(),
    // mock数据
    viteMockServe({
      supportTs: false
    }),
    // element plus 按需导入配置
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  resolve: {
    // 设置别名
    alias: {
      '@': path.resolve(__dirname, 'src'),
      'comps': path.resolve(__dirname, 'src/components'),
      'apis': path.resolve(__dirname, 'src/apis'),
      'views': path.resolve(__dirname, 'src/views'),
      'utils': path.resolve(__dirname, 'src/utils'),
      'routes': path.resolve(__dirname, 'src/routes'),
      'styles': path.resolve(__dirname, 'src/styles')
    }
  },
  // 本地服务配置
  server: {
    // port: 8888,
    // open: true,
    // proxy: {
    //   '/api': {
    //     target: 'https://www.baidu.com',
    //     changeOrigin: true,
    //     rewrite:(path) => path.replace(/^\/api/, '')
    //   }
    // }

    // watch: {
    //   ignored: ['!**/node_modules/your-package-name/**']
    // }
  },
  // 被监听的包必须被排除在优化之外，
  // 以便它能出现在依赖关系图中并触发热更新。
  // optimizeDeps: {
  //   exclude: ['your-package-name']
  // }
})


```