---
# sidebar: auto,
# tags:
#   - Vue
---

# Vue
[公司要求会使用框架 vue，面试题会被问及哪些？](https://mp.weixin.qq.com/s/ZIRcoEWjRzJYXpbU1WVnTg)

MVVM(Model-View-ViewModel)架构

1. View: 视图层
2. ViewModel: 业务逻辑层（一切js可视为业务逻辑）
3. Model: 数据层（存储数据及对数据的处理如增删改查）


## _单页 VS 多页_

### 多页

页面跳转返回 HTML，首屏时间快，SEO 效果好，但页面切换慢

### 单页

页面跳转通过 js 渲染，页面切换快，但是首屏时间稍慢，SEO 差

### vue 组件 name 的用途

-   递归组件时
-   通过 keep-live 使用页面缓存时，可以通过 name 设置某个页面不进行缓存


## Vue2 VS Vue3

* 选项时API 逻辑比较分散，可读性差，可维护性差
* 组合式API 逻辑分明，可维护性高

## Vue3 新特性

### 重写双向数据绑定

```js
// vue2
// 基于Object.defineProperty()实现
 
// vue3 基于Proxy
// proxy与Object.defineProperty(obj, prop, desc)方式相比有以下优势：
 
//丢掉麻烦的备份数据
//省去for in 循环
//可以监听数组变化
//代码更简化
//可以监听动态新增的属性；
//可以监听删除的属性 ；
//可以监听数组的索引和 length 属性；
 
let proxyObj = new Proxy(obj,{
    get : function (target,prop) {
        return prop in target ? target[prop] : 0
    },
    set : function (target,prop,value) {
        target[prop] = 888;
    }
})

```

### VDOM性能瓶颈
在Vue2中,每次更新diff,都是全量对比,Vue3则只对比带有标记的,这样大大减少了非动态内容的对比消耗

[Vue Template Explorer](https://vue-next-template-explorer.netlify.app/) 可以通过这个网站看到静态标记

新增 patch flag 标记
```
TEXT = 1 // 动态文本节点
CLASS=1<<1,1 // 2//动态class
STYLE=1<<2，// 4 //动态style
PROPS=1<<3,// 8 //动态属性，但不包含类名和样式
FULLPR0PS=1<<4,// 16 //具有动态key属性，当key改变时，需要进行完整的diff比较。
HYDRATE_ EVENTS = 1 << 5，// 32 //带有监听事件的节点
STABLE FRAGMENT = 1 << 6, // 64 //一个不会改变子节点顺序的fragment
KEYED_ FRAGMENT = 1 << 7, // 128 //带有key属性的fragment 或部分子字节有key
UNKEYED FRAGMENT = 1<< 8, // 256 //子节点没有key 的fragment
NEED PATCH = 1 << 9, // 512 //一个节点只会进行非props比较
DYNAMIC_SLOTS = 1 << 10 // 1024 // 动态slot
HOISTED = -1 // 静态节点
BALL = -2
```

### Fragments
* Vue3允许我们支持多个根节点
* 支持render JSX写法
* 同时新增了Suspense 和 多v-model用法

### Tree-Shaking
简单来讲，就是在保持代码运行结果不变的前提下，去除无用的代码

在Vue2中，无论我们使用什么功能，它们最终都会出现在生产代码中。主要原因是Vue实例在项目中是单例的，捆绑程序无法检测到该对象的哪些属性在代码中被使用到

而Vue3源码引入tree shaking特性，将全局 API 进行分块。如果你不使用其某些功能，它们将不会包含在你的基础包中

就是比如你要用watch 就是import {watch} from 'vue' 其他的computed 没用到就不会给你打包减少体积

### Composition API
Setup 函数式编程 也叫vue Hook

## Vite创建Vue项目
> Vite 需要 Node.js 版本 >= 12.0.0。

使用NPM：

`npm init vite@latest`

你还可以通过附加的命令行选项直接指定项目名称和你想要使用的模板。例如，要构建一个 Vite + Vue 项目，运行:
```zsh
# npm 6.x
npm init vite@latest my-vue-app --template vue

# npm 7+, 需要额外的双横线：
npm init vite@latest my-vue-app -- --template vue

# yarn
yarn create vite my-vue-app --template vue

# pnpm
pnpm create vite my-vue-app -- --template vue
```
查看 [create-vite](https://github.com/vitejs/vite/tree/main/packages/create-vite) 以获取每个模板的更多细节：vanilla，vanilla-ts，vue，vue-ts，react，react-ts，preact，preact-ts，lit，lit-ts，svelte，svelte-ts。

## 升级 vue3

首先把 vue-cli 升级到 v4.5+

```js
// 升级vue-cli
npm install -g @vue/cli@next
// 到项目目录下，升级相关插件
vue upgrade --next
// 安装 vue-cli-plugin-vue-next 插件,将项目升级为vue3.0的依赖环境，升级vue版本，vue-router,vuex升级到4.x版本
vue add vue-next
```

[vue3 官方文档](https://v3.vuejs.org/guide/installation.html#cli)

[Vue 组合式 API](https://composition-api.vuejs.org/zh/#%E6%A6%82%E8%BF%B0)

composition api 通过逻辑关注点组织代码

### composition api

-   setup(props, context)
    初始化组件，返回设置的响应式数据; props 获取 props 中定义的属性值，context 获取上下文，context.emit: 组件外发送事件

-   onMounted
    生命周期钩子

-   reactive
    对对象格式的数据设置响应式

```js
const data = reactive({
	list: [],
})

return { data }
```

-   ref
    对基本数据类型、数组等设置响应式；通过 a.value 读写属性值

```js
const a = ref('')
const list = ref([])
return { a, list }
```

-   computed
    设置计算属性，通过 a.value 读写属性值

```js
const a = computed(() => {
	return a
})
```

### 非Prop的Attribute
可以通过`$attrs`访问
* 禁用Attribute继承
如果你不希望组件的根元素继承 `attribute`，可以在组件的选项中设置 `inheritAttrs: false`。

### v-model 参数
默认情况下，组件上的 `v-model` 使用 `modelValue` 作为`prop` 和 `update:modelValue` 作为事件。
可以通过向`v-model`传递参数来修改这些名称,支持多个v-model绑定

例如：
````
v-model:title

````

## 动态组件
````
<component :is="currentTabComponent"></component>
````

## 模板引用
有时你可能仍然需要在 JavaScript 中直接访问子组件。为此，可以使用 ref attribute 为子组件或 HTML 元素指定引用 ID

## 处理边界情况
### 控制更新
    * 强制更新： 可以使用`$forceUpdate`
### 低级静态组件与 v-once

## 过渡
### 过渡class
    * v-enter-from
    * v-enter-active
    * v-entrt-to
    * v-leave-from
    * v-leave-active
    * v-leave-to
    

## setup
它是组件内部使用组合式 API 的入口点。
* 调用时间
在创建组件实例时，在初始 prop 解析之后立即调用 setup。在生命周期方面，它是在 beforeCreate 钩子之前调用的。


第二个参数提供了一个上下文对象，该对象暴露了多个可能在 setup 中有用的对象和函数：
````js
const MyComponent = {
  setup(props, context) {
    context.attrs
    context.slots
    context.emit
    context.expose
  }
}
````
`attrs`、`slots` 和 `emit` 分别等同于 `$attrs`、`$slots` 和 `$emit` 实例 property。

`attrs` 和 `slots` 是内部组件实例上相应值的代理。这样可以确保它们即使在更新后也始终会显示最新值，以便我们可以对它们进行解构，而不必担心访问过时的引用：
````js
const MyComponent = {
  setup(props, { attrs }) {
    // 稍后可能会调用的函数
    function onClick() {
      console.log(attrs.foo) // 保证是最新引用
    }
  }
}
````