# webpack
webpack所解决的问题：

如何在前端项目中更高效的管理和维护项目中的每一个资源

## 模块化
### 模块化的演进过程
早期的前端技术标准根本没有预料到前端行业会有今天这个规模，所以在设计上存在很多缺陷

#### Stag1 - 文件划分的方式
缺点：
* 模块直接在全局工作，大量模块成员污染全局作用域
* 没有私有空间，所有模块内的成员都可以在模块外部被访问和修改
* 一旦模块增多，容易产生命名冲突
* 无法管理模块与模块之间的依赖
* 在维护的过程中也很难分辨每个成员所属的模块

#### Stag2 - 命名空间方式
解决了命名冲突的问题，但其他问题依然存在

#### Stag3 - IIFE

> 以上方式有模块加载的问题

更为理想的方式是在页面中引入一个JS入口文件，其余用到的模块可以通过代码控制，按需加载

### 模块化规范的出现
目前通过约定实现模块化的方式，不同的开发者在实施的过程中会出现一些细微的差别，为了统一不同开发者、不同项目之间的差异，就需要制定一个行业标准去规范模块化的实现方式

两点需求：
* 一个统一的模块化标准规范
* 一个可以自动加载模块的基础库

#### CommonJS规范
是Node.js中所遵循的模块规范

该规范约定一个文件就是一个模块，每个模块都有单独的作用域，通过module.exports导出成员，再通过require函数载入模块

#### AMD规范
在早期制定前端模块化标准时，并没有直接选择CommonJS规范，而是专门为浏览器重新设计了一个规范AMD（Asynchronous Module Definition),即异步模块定义规范

同期还推出了Require.js，除了实现了AMD模块化规范，本身也是一个非常强大的模块加载器

#### ES Modules规范
JavaScript的标准逐渐走向完善

端模块化规范的最佳实践方式也基本实现了统一：
* 在Node.js环境中，遵循CommonJS规范来组织模块
* 在浏览器环境中，遵循ES Modules规范

ES modules规范是ECMAScript 2015(ES6) 中才定义的模块系统，是近几年才制定的标准，存在环境兼容问题，随着Webpack等一系列打包工具的流行，这一规范才开始逐渐被普及

经过5年的迭代，ESModules已发展成为现今最主流的前端模块化标准

针对ES Modules本身的一些特性可参考：
* MDN官方的详细资料
* ECMAScript官方详细资料

### 模块化问题
* 我们所使用的 ES Modules模块系统本身就存在环境兼容问题，尽管现如今主流浏览器的最新版本都支持这一特性，是目前还无法保持用户的浏览器使用情况，所以还需要解决兼容问题

* 模块化的方式划分出来的模块文件过多，而前端应用又运行在浏览器中，每一个文件都需要单独从服务端请求回来，零散的模块文件必然导致浏览器的频繁发送网络请求，影响应用的工作效率

* 随着应用日益复杂，在前端应用开发过程中不仅仅只有JavaScript代码需要模块化，HTML和CSS这些资源文件也会面临需要被模块化的问题，从宏观角度来看，这些文件也都应该看作前端应用中的一个模块，只不过这些模块的种类和用途跟JavaScript不同


Webpack从一个“打包工具”发展成现在开发者眼中对整个前端项目的“构建系统”，表面上似乎只是称呼发生了变化，但背后却透露出一个信号：模块化思想是非常伟大的，伟大到可以帮你“统治”前端整个项目

## 如何使用Webpack实现模块化打包？

* 能够将散落的模块打包到一起
* 能够编译代码中的新特性
* 能够支持不同种类的前端资源模块

以Webpack为例：
* Webpack作为一个模块打包工具，本身就可以实现模块化代码打包的问题，通过Webpack可以将零散的JavaScript代码打包到一个JS文件中
* 对于有环境兼容问题的代码，Webpack可以在打包过程中通过Loader机制对其实现编译转换，然后再进行打包
* 对于不同类型的前端模块，Webpack支持在JavaScript中以模块化的方式载入任意类型的资源文件，例如可以通过Webpack实现在JavaScript中加载CSS文件，被加载的CSS文件将会通过style标签的方式工作

Webpack还具有代码拆分的能力，能够将应用中所有的模块按需分块打包，不用担心全部代码打包到一起，产生单个文件过大，导致加载慢的问题，非常适合现代化的大型Web应用

作为目前最主流的前端模块打包器，提供了一整套前端项目模块化方案，而不仅仅局限于对JavaScript的模块化，可以轻松实现对前端项目开发过程中涉及到的资源进行模块化

### 快速上手

```bash
# 安装
npm i webpack webpack-cli --save-dev
# 查看版本
npx webpack --version
# 执行: 默认会自动从src/index.js文件开始打包
webpack
```

### 配置打包过程
```js
// webpack.config.js
const path = require('path')

module.exports = {
    entry: './src/main.js',
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'output')
    }
}
 
```

Webpack的配置项较多，很多选项都支持不同类型的配置方式，如果你刚刚接触Webpack的配置，这些配置选项一定会让你感到头大

Webpack针对不同环境的三组预设配置：
* production模式
启动内置优化插件，自动优化打包结果，打包速度偏慢

* development模式
自动优化打包速度，添加一些调试过程中的辅助插件以便于更好的调试错误

* none模式
运行最原始的打包，不做任何额外处理，这种模式一般需要分析我们模块的打包结果时会用到

想要修改Webpack工作模式的方式有两种：
* 通过CLI --mode 参数传入
* 通过配置文件设置mode属性

## 如何通过Loader实现特殊资源加载？
Webpack不仅是JavaScript模块打包工具，还是整个前端项目（前端工程）的模块打包工具，可以通过Webpack去管理前端项目中任意类型的资源文件

### 使用Loader
```js
// webpack.config.js
module.exports = {
  entry: './src/main.js',
  output: {
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.md$/,
        use: './markdown-loader'
      }
    ]
  }
}
```

### 实现Loader
```js
// markdown-loader.js
const { marked } = require('marked')
module.exports = source => {
  // 1
  // 加载到的模块内容
  // console.log(source);
  // 返回值就是最终被打包的内容
  // return 'hello loader~'
  // return 'console.log("hello loader~")'

  // 2
  // 将markdown转换为html字符串
  const html = marked.parse(source)
  console.log(html)
  // 将html字符串拼接为一段导出字符串的JS代码
  // // const code = `module.exports = ${JSON.stringify(html)}`
  // const code = `exports default ${JSON.stringify(html)}`
  // // 返回js代码
  // return code

  // 3
  // 直接返回html，交给下一个loader去处理
  return html
}
```

Loader机制是Webpack最核心的机制，正因为有Loader机制，Webpack才能足以支撑整个前端项目模块化的大梁，实现通过Webpack去加载任何你想要加载的资源

## Webpack 插件机制的目的
是为了增强Webpack在项目自动化构建方面的能力

插件最常见的应用场景：
* 实现自动在打包之前清除dist目录（上次的打包结果）
* 自动生成应用所需要的HTML文件
* 根据不同环境为代码注入类似API地址这种可能变化的部分
* 拷贝不需要参与打包的资源文件到输出目录
* 压缩Webpack打包完成后输出的文件
* 自动发布打包结果到服务器实现自动部署

### 常用插件

* clean-webpack-plugin

实现自动在打包之前清除dist目录

`npm i clean-webpack-plugin -D`

* html-webpack-plugin

用于生成HTML的插件

`npm i html-webpack-plugin -D`

HTML文件一般都是通过硬编码的方式，单独存放在项目目录下

这种方式有两个问题：
1. 项目发布时，我们需要同时发布根目录下的HTML文件和dist目录中所有的打包结果，非常麻烦，而且上线过后还要确保HTML代码中的资源文件路径是正确的
2. 如果打包结果输出的目录或者文件名称发生变化，那HTML代码中所对应的script标签也需要我们手动修改路径

相比于之前写死HTML文件的方式，自动生成HTML的优势在于：
* HTML也输出到dist目录中了，上线时只需要把dist目录发布出去
* HTML中的script标签是自动引入的，所以可以确保资源文件的路径是正常的

## webpack 构建TS项目

### 安装依赖
````

安装webpack   npm install webpack -D

webpack4以上需要 npm install  webpack-cli -D

编译TS  npm install ts-loader -D

TS环境 npm install typescript -D

热更新服务 npm install  webpack-dev-server -D

HTML模板 npm install html-webpack-plugin -D
````
### 配置文件

```js
const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    entry: "./src/index.ts",
    mode: "development",
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: "index.js"
    },
    stats: "none",
    resolve: {
        extensions: ['.ts', '.js'],
        alias: {
            '@': path.resolve(__dirname, './src')
        }
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: "ts-loader"
            }
        ]
    },
    devServer: {
        port: 1988,
        proxy: {}
    },
    plugins: [
        new htmlWebpackPlugin({
            template: "./public/index.html"
        })
    ]
}

```