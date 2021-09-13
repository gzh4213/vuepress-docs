# rollup

## 什么是`rollup`

> Rollup 是一个 JavaScript 模块打包器，可以将小块代码编译成大块复杂的代码，例如 library 或应用程序。rollup.js更专注于Javascript类库打包。
> rollup对于代码的Tree-shaking和ES6模块有着算法优势上的支持，若你项目只需要打包出一个简单的bundle包，并是基于ES6模块开发的，可以考虑使用rollup。

## 安装

### 全局安装rollup

````
npm i rollup -g
````

### 命令执行
````
rollup src/index.js -f umd -o dist/bundle.js
````

参数说明

* `-f` 是`--format`的缩写，它表示生成代码的格式，`amd`表示采用`AMD`标准，`cjs`为`CommonJS`标准，`esm`（或 `es`）为`ES`模块标准。-f的值可以为`amd`、`cjs`、`system`、`esm`（`es`也可以）、`iife`或`umd`中的任何一个。

* `-o`。`-o`指定了输出的路径，这里我们将打包后的文件输出到`dist`目录下的`bundle.js`
* `-c`。指定`rollup`的配置文件。
* `-w`。监听源文件是否有改动，如果有改动，重新打包。

更多[命令行参数](https://rollupjs.org/guide/en/#command-line-flags)

## 配置文件（`rollup.config.js`）

* `input`表示入口文件的路径（老版本为 entry，已经废弃）
* `output`表示输出文件的内容，它允许传入一个对象或一个数组，当为数组时，依次输出多个文件，它包含以下内容：

    * `output.file`：输出文件的路径（老版本为 dest，已经废弃）
    * `output.format`：输出文件的格式
    * `output.name`：输出文件的全局变量名称  ---当format为iife和umd时必须提供，将作为全局变量挂在window(浏览器环境)下：window.A=...
    * `output.banner`：文件头部添加的内容
    * `output.footer`：文件末尾添加的内容
* `external` 设置哪些是外部的类库
* `global`
  ````js
  global:{
    'jquery':'$' //告诉rollup 全局变量$即是jquery
  }
  ````


## 插件

### `@rollup/plugin-node-resolve` : 允许加载第三方模块
  在上面的入门案例中，我们打包的对象是本地的`js`代码和库，但实际开发中，不太可能所有的库都位于本地，我们大多会通过`npm`下载远程的库。

  与`webpack`和`browserify`这样的其他捆绑包不同，`rollup`不知道如何打破常规去处理这些依赖。因此我们需要添加一些配置。

  `@rollup/plugin-node-resolve`将我们编写的源码与依赖的第三方库进行合并

#### 安装
````
npm i -D @rollup/plugin-babel

````
#### 使用
````js
import resolve from "@rollup/plugin-node-resolve";

export default {
  input: ["./src/index.js"],
  output: {
    file: "./dist/bundle.js",
    format: "umd",
    name: "experience",
  },
  plugins: [resolve()],
};

````

### `@rollup/plugin-commonjs`: 将第三方模块转换为ES6版本
  `rollup.js`编译源码中的模块引用默认只支持 `ES6+`的模块方式`import/export`。然而大量的`npm`模块是基于`CommonJS`模块方式，这就导致了大量 `npm`模块不能直接编译使用。
  因此使得`rollup.js`编译支持`npm`模块和`CommonJS`模块方式的插件就应运而生：`@rollup/plugin-commonjs`。
#### 安装
````
npm i -D @rollup/plugin-commonjs

````
#### 使用
````js
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
export default {
  input: ["./src/index.js"],
  output: {
    file: "./dist/bundle.js",
    format: "umd",
    name: "experience",
  },
  plugins: [resolve(), commonjs()],
  external: ["the-answer"],
};

````

### `@rollup/plugin-babel`

期望在`rollup.js`打包的过程中就能使用babel完成代码转换

#### 安装
````
npm i -D @rollup/plugin-babel
````
#### 依赖
`@babel/core` `@babel/preset-env`

#### 添加配置文件`.babelrc`

我们将 .babelrc 文件放在 src 中，而不是根目录下。 这允许我们对于不同的任务有不同的 .babelrc 配置，比如像测试，如果我们以后需要的话 - 通常为单独的任务单独配置会更好。

````js
{
  "presets": [
    [
      "@babel/preset-env",
      {
        "modules": false,    //  "modules": false ，否则 Babel 会在 Rollup 有机会做处理之前，将我们的模块转成 CommonJS ，导致 Rollup 的一些处理失败。
        // "useBuiltIns": "usage"
      }
    ]
  ]
}

````
#### 使用
````js
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import babel from "@rollup/plugin-babel";

export default {
  input: ["./src/es6.js"],
  output: {
    file: "./dist/esBundle.js",
    format: "umd",
    name: "experience",
  },
  plugins: [resolve(), commonjs(), babel()],
  external: ["the-answer"],
};

````

### `@rollup/plugin-json`

#### 安装
````js
npm i -D @rollup/plugin-json
````

#### 使用
````js
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import babel from "@rollup/plugin-babel";
import json from '@rollup/plugin-json'

export default {
  input: ["./src/es6.js"],
  output: {
    file: "./dist/esBundle.js",
    format: "umd",
    name: "experience",
  },
  plugins: [resolve(), commonjs(), babel(), json()],
  external: ["the-answer"],
};

````

### `@rollup/plugin-typescript`
#### 安装及依赖
````js
npm i -D @rollup/plugin-typescript tslib typescript
````

#### 配置
````js
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import babel from "@rollup/plugin-babel";
import json from '@rollup/plugin-json'
import typescript from '@rollup/plugin-typescript'

export default {
  input: ["./src/es6.js"],
  output: {
    file: "./dist/esBundle.js",
    format: "umd",
    name: "experience",
  },
  plugins: [resolve(), commonjs(), babel(), json(), typescript()],
  external: ["the-answer"],
};

````

#### 配置tsconfig.json

````json
{
  "compilerOptions": {
    "lib": ["ES6"],
    "module": "esnext",
    "allowJs": true
  },
  "exclude": [
    "node_modules/**"
  ],
  "include": [
    "src/**/*"
  ]
}
````

### `rollup-plugin-terser`
> terser是什么，它是适用于ES6 +的JavaScript解析器，mangler和压缩器工具包

> 我们比较熟悉的是uglify，因为我们在webpack中使用过，rollup中也有rollup-plugin-uglify插件.我们看到 注意：uglify-js只能翻译es5语法。如果要转译es6+语法，请改用terser

#### 安装及依赖
````js
npm i -D rollup-plugin-terser
````

#### 配置
````js
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import babel from '@rollup/plugin-babel'
import json from '@rollup/plugin-json'
import typescript from '@rollup/plugin-typescript'
import { terser } from 'rollup-plugin-terser'
export default {
  input: 'src/main.js',
  output: {
    file: 'bundle.js',
    format: 'umd',
    name: 'experience',
    // banner: "'banner content'",
    // footer: "'footer content'"
  },
  plugins: [ resolve(), commonjs(), babel(), json(), typescript(), terser() ],
  external: ["the-answer"]
}
````