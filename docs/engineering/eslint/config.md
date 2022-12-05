# config

```js
// .eslintrc.js

module.exports = {
  parserOptions: {
    ecmaVersion: 6, // 指定 EsLint 支持 ECMAScript 6 的语法检测
    ecmaFeatures: {
      // 允许 js 代码中使用 jsx
      jsx: true,
      // 允许顶层 return
      globalReturn: true,
    },
  },
  parser: 'espree', // 使用默认 espree 解析器
  rules: {
    'no-unused-vars': ['error'], // 定义规则禁止声明未使用的变量
  },
}

```

## ParserOptions

表示 EsLint 对于不同的 Parser（解析器）配置的语言检查规则。

* `ecmaVersion`: 如上边示例的，表示应用代码中支持的 ECMAScript 版本。默认为 5 ，支持3、5、6、7、8、9 或 10 来指定你想要使用的 ECMAScript 版本。当然也可以使用 latest 表示最新的 ECMA 版本。
* `sourceType`: 表示应用代码中支持的模块规范，默认为 script。支持 script 和 module (ESM) 两种配置。
* `ecmaFeatures`: 它是一个对象，表示代码中可以使用的额外语言特性。
  * `globalReturn` 允许全局下使用 return 。
  * `impliedStrict` 启用全局严格模式。（ES 5以上有效）
  * `jsx` 允许代码中使用 jsx 语法。

## Parser
Eslint 在解析我们的代码时使用到的解析器。

关于 EsLint 是如何帮助我们进行代码检查的，简单来说本质上它仍是将我们的代码根据规定的解析器转化成为 AST 抽象语法树。

之后根据我们传入配置中的各种规则对于源代码生成的 AST 语法树进行代码检查以及代码修复。

ESLint 默认情况下使用`Espree`作为其解析器，当然我们也可以传入一些自定义的解析器。比如：`Esprima`、`@typescript-eslint/parser` 等等

### typescript代码解析

```js

// .eslint.js
module.exports = {
  parser: 'espree', // 使用默认 espree 解析器
  rules: {
    'no-unused-vars': ['error'], // 定义规则禁止声明未使用的变量
  },
};


// index.ts 定义 b 但未使用，并没有报错
const b: string = '1'

```

上述我们使用了 typescript 语法定义了变量 b 但是并没有使用变量 b ，此时 EsLint 规则检查并没有生效。
这是因为我里上述配置文件的 `parser` 默认使用的是 `espree`，它并不支持 typescript 语法的检查，要额外支持 ts 语法的检查需要使用额外的 `ts 解析器`。

```js
module.exports = {
  parser: '@typescript-eslint/parser', // 修改解析器为 @typescript-eslint/parser
  rules: {
    'no-unused-vars': ['error'],
  },
};


// index.ts
const b: string = '1' // error: 'b' is assigned a value but never used
```

所以 tsc 在处理 ts 语法转译后的 ast 规则是 eslint 默认的 espree 是完全不一致的，所以我们需要通过 @typescript-eslint/parser 解析器来解析我们的代码。

当我们使用特定的解析器时，比如使用 @typescript-eslint/parser 最终会将 ts 文件转移后的 ast 结构转化成为 espree 支持的 ast 结构进行静态检查。

当然，我们最开始提到的 parserOptions 也是针对于不同的解析器（Parser）的选项配置，具体各个 ParserOptions 选项内容可以在不同的 parser 文档中查找对应规则。

**所以，Parser 选项简单来说就是表示我们以何种解析器来转译我们的代码。本质上，所有的解析器最终都需要讲代码转化为 espree 格式从而交给 Eslint 来检测。**

## Environments
同样在 EsLint 中我们可以通过 `env` 选项来设置环境变量支持，从而支持一组通用的全局变量。

比如通常我们在浏览器环境下执行 JavaScript 代码的话需要使用到浏览器下的一些全局相关的 Api 参数，比如 `document`、`window` 等等。

默认情况下 Eslint 会检测我们的代码，并且并不支持这些不同环境下的全局变量。比如：

```js
module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    'no-undef': ['error'], // 设置允许使用未声明的全局变量
  },
};

// index.js
console.log(window) // 'window' is not defined.eslintno-undef
console.log(document) // 'document' is not defined.eslintno-undef

```
可以看到，当我们在项目代码中使用 window 时此时 EsLint 会提示 window 未被声明。

我们可以通过指定 `env` 配置来告诉 EsLint 当前项目支持的运行环境，从而可以使用当前环境下相关的全局变量：

```js
// .eslintrc
module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 'latest',
  },
  env: {
    browser: true,
  },
  rules: {
    'no-unused-vars': ['error'],
     // 禁止使用未定义的变量
    'no-undef': ['error'],
  },
};


// index.js
console.log(window); // correct
console.log(document) // correct

```

同样 env 选项支持非常多的配置：

* `browser` 支持浏览器环境，表示支持浏览器环境下的相关全局变量。比如 `window`、`document` 等等
* `node` 支持 NodeJs 环境，可以使用 Node 环境下的全局变量。比如 `process`、`global`、`require` 等等
* `shared-node-browser` 表示可以使用 Node 环境和浏览器环境下同时存在的全局变量，比如 `console`  相关。
* es6 启用除了 modules 以外的所有 ECMAScript 6 特性（该选项会自动设置 `ecmaVersion` 解析器选项为 6）。
* 等等非常多的预设环境，具体你可以在[这里查看到](https://zh-hans.eslint.org/#specifying-environments)。

需要额外强调的是这里 env 中的 `es6` 和 parserOptions 中的 `ecmaScript` 区别：


* `parserOptions` 中的 `ecmaScript` 设置时（如果为 6 或者更高版本），仅表示 Lint 在检查时支持一些高版本的语法。比如 `let`、`const`、箭头函数等等。

* `env` 中的 `es6` 开启时，表示允许代码中使用高版本语法的 Api 比如：`Promise`、`Set`、`Map` 等全局相关模块。当然开启 `env: {es6:true}` 想等于同时设置了`ecmaVersion: 6`。

## Globals
上述我们提到了，我们可以 `env` 来预设来支持不同环境下的全局变量。

那么，如果我们定义了一些特殊的全局变量。那么我们应该如何告诉 EsLint 呢？

在 Typescript 中我们可以通过 `*.d.ts` 声明文件来解决 Ts 对于自定义全局变量的支持。

在 Eslint 同样，我们可以在配置文件中通过 `globals` 选项来支持自定义的全局变量。

比如，我们在全局定义了 `wangHaoyu` 的变量，我们希望在 `index.js` 来直接使用这个变量：

```js
// .eslintrc
module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 5,
  },
  env: {
    browser: true,
  },
  // 通过 globals 定义额外的全局变量
  globals: {
    wangHaoyu: true,
    // 设置微信小程序的一些全局变量
    wx: true,
    uni: true,
    getApp: true,
    getCurrentPages: true,
    Component: true,
    Page: true,
    App: true
  },
  rules: {
     // 禁止使用未定义的变量
    'no-undef': ['error'],
  },
};


// index.js
console.log(wangHaoyu);
```

> 当访问当前源文件内未定义的变量时，no-undef 规则将发出警告。如果我们想在一个源文件里使用某些全局变量，并且避免 EsLint 发出错误警告。那么我们可以使用 globals 配置来定义这些特殊的全局变量。

上述我们定义 `globals` 中的 `wangHaoyu: true` 相当于我们定义了 `wangHaoyu: 'writable'` 。
同样，`globals` 中的值还支持：

* `"writable"`或者 `true`，表示变量可重写；
* `"readonly"`或者`false`，表示变量不可重写；
* `"off"`，表示禁用该全局变量。

## Configuring Rules

EsLint 通过我们在配置文件中定义规则从而对于我们的代码进行静态检测，同样我们可以通过定义一系列 Rules 从而利用 Lint 工具来检查我们的代码。

同样 EsLint 内部内置了一系列规则从而来帮助我们来检查对应代码。

我们可以通过以下规则选项设置当前规则的检测等级：

* `"off"` 或 `0` 表示关闭本条规则检测
* `"warn"` 或 `1` 表示开启规则检测，使用警告级别的错误：`warn` (不会导致程序退出)
* `"error"` 或 `2` 表示开启规则，使用错误级别的错误：`error` (当被触发的时候，程序会退出)

```js
// .eslintrc
module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 6,
  },
  env: {
    browser: true,
  },
  globals: {
    wangHaoyu: true,
  },
  rules: {
    'no-console': [1], // 对于 console 进行警告检测
    'no-unused-vars': ['error'], // 对于未使用的变量进行错误检测
  },
};

// index.js
console.log('hello world'); // warn: Unexpected console statement
const name = '19Qingfeng'; // error:'name' is assigned a value but never used
```

更多规则查看[文档](https://eslint.org/docs/latest/user-guide/configuring/rules#configuring-rules)

## Plugins

通常 EsLint 中默认提供了一系列内置的 Rules 规则提供给我们进行配置，从而检测我们的 JavaScript 代码。

这些内置的规则你可以在 `eslint/node_modules/eslint/lib/rules/array-bracket-spacing.js` 中详细查看到：

但是在某些特定条件下，内置的一些规则并不能满足我们的代码检查。

所以此时我们就要基于该情况做一些特殊的拓展了，Plugin 的作用正是处理这些功能而生。

比如，通常在我们使用 Eslint 来检查我们的代码时，需要将解析器替换为 `@typescript-eslint/parser` 的同时针对于一些 TypeScript 特定语法我们还需要使用 `@typescript-eslint/eslint-plugin` 来支持一些特定的 TS 语法检查。

这里我们额外安装的  `@typescript-eslint/eslint-plugin` 中就包含了一系列有关于 TS 文件检测的特殊规则。

在 EsLint 内部并不支持有关于 Ts 的一些语法，自然我们需要通过 Plugin 来拓展对应的检测规则。

当我们在 Plugins 中声明对应的插件后，就可以在 rules 配置中使用对应插件中声明的特殊规则限制了。比如：

```js
// .eslintrc.js
module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 6,
  },
  plugins: ['@typescript-eslint/eslint-plugin'],
  env: {
    browser: true,
  },
  rules: {
    '@typescript-eslint/array-type': 2
  },
};

// index.ts
const array: Array<number> = [1, 2, 3] // error: Array type using 'Array<number>' is forbidden. Use 'number[]' instead.

const correctArray: number[] = [1, 2, 3] // correct
```

上述我们将 `parser` 更换为 `@typescript-eslint/parser` 后，同样引入了 `@typescript-eslint/eslint-plugin` 插件来扩展针对于 ts 文件的 Lint 检查规则。

同时，我们在 `rules` 配置中使用 `@typescript-eslint/array-type` 来定义数组类型声明时的规则规范。

我们可以看到上边的 index.ts 中针对于 TS 声明数组类型的检查会进行额外的 Eslint 检查。

**简单点来说，所谓的 Plugin 正是对于 EsLint 内置的规则拓展，通过 Plugin 机制我们可以实现 EsLint 中自定义的 Rules。**

## Extends

如果说上述 Plugins 和 Rules 可以满足项目的 Lint 配置的话，那么 Extends 关键字可以理解为关于 Plugins 和 Rules 结合而来的最佳实践。

正如其名，Extends 表示继承的意思。通常在不同的项目中，大多数情况下都具有相同的 Lint 相关配置。

基于这种情况 EsLint 提供了 Extends 关键字来解决不同项目下存在的通用配置。我们可以利用 EsLint 中的 Extends 关键字来继承一些通用的配置。

比如，EsLint 官方提供了 `eslint:recommended` 规则，当我们在配置文件中继承 `"eslint:recommended"` 时，相当于启用了一系列核心规则，这些规则会被 EsLint 官方维护在 `"eslint:recommended"` 中定期更新：

```js
// .eslintrc.js
module.exports = {
  root: true,
  parser: 'espress',
  parserOptions: {
    ecmaVersion: 6,
  },
  extends: ['eslint:recommended'],
};

// index.js
const a = 'hello world'; // error: 'a' is assigned a value but never used.eslintno-unused-vars
```
上述的代码可以看到，我们没有定义任何 rules 以及 plugins 。仅仅是  `extends: ['eslint:recommended']`。

此时我们在 `index.js` 中定义了 a 变量但为使用，EsLint 会为我们检测出错误 `'a' is assigned a value but never used.eslintno-unused-vars`。

**其实，`extends` 的作用简单来说就是在项目内继承于另一份 EsLint 配置文件而已。**


Extends 继承关键字存在三种写法（情况）：
* 从 EsLint 本身的规则进行继承，比如  `extends: ['eslint:recommended']`
* 从第三方的 NPM 包规则进行继承，比如 `extends : ['eslint-config-airbnb']`
* 从 ESLint 的插件进行继承，比如 `extends: ['plugin:react/recommended']`
* 从绝对路径继承而来，比如 extends: `["./node_modules/coding-standard/eslintDefaults.js"]`


## Overrides
通常在一些项目中，我们需要针对不同的文件进行不同的 Lint 配置，那么此时 EsLint 同样为我们提供了 Overrides 选项来解决这个问题。

比如，我们项目中存在一些以 `.test`、`.spec` 结尾的测试文件，那么此时我们希望这些测试文件可以拥有不同的 Lint 配置规则。

那么我们就可以使用 Overrieds 配置来进行特定文件的规则覆盖，比如：

```js
// .eslintrc.js
module.exports = {
  rules: {
      'no-console': 2
  },
  overrides: [
    // *.test.js 以及 *.spec.js 结尾的文件特殊定义某些规则
    {
      files: ['*-test.js', '*.spec.js'],
      rules: {
        'no-unused-expressions': 2,
      },
    },
  ],
};
```

上述的配置中，针对于 `*.test.js/*.spce.js` 的话既支持 `no-console` 的规则同时也开启了 `no-unused-expressions` 的规则。

当然你可以 overrides 你还可以配置更多的规则，比如 `excludedFiles`、`parser`、`parserOptioons` 等等

## Processor

在配置手册的最后，我们来聊聊 Processor 配置。通常针对于 Web 项目大多数情况下我们都使用框架辅助我们的开发。

比如，我们在使用 Vue 来开发我们的项目时，希望利用 Eslint 代码来约束我们的 Vue 代码。那么此时 Processor 的作用就体现了。

我们清楚在一个 .vue 文件中，并不单纯的由 JavaScript 组成而来，所以我们希望 EsLint 检查我们的 JavaScript 代码时，就需要以一种额外的处理手段将特殊代码中的 JS 提取出来从而进行检查。

Processor 正是这种用法，

插件可以提供处理器。处理器可以从另一种文件中提取 JavaScript 代码，然后让 ESLint 检测 JavaScript 代码。或者处理器可以在预处理中转换 JavaScript 代码。

通常我们在编写 EsLint 插件时，如果是针对于非 Js 文件的话可以单独使用一个 Processor 来处理，当然这个后续我们在谈。

如果我们要在配置文件中指定处理器，直接使用 processor 属性就可以。

使用由插件名和处理器名组成的串接字符串加上斜杠。比如，下面的选项就代表启用插件 a-plugin 提供的处理器 a-processor：

```js
{
    "plugins": ["a-plugin"],
    "processor": "a-plugin/a-processor"
}
```

**简单来说处理器的原理是将我们的非 JS 文件经过处理成为一个一个具名的代码块，最终在将这些处理后的 js 文件当作原始文件的子文件交给 EsLint 处理。**



[文章来源](https://juejin.cn/post/7136458949322080292)