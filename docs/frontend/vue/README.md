---
# sidebar: auto,
# tags:
#   - Vue
---

# vue

[公司要求会使用框架 vue，面试题会被问及哪些？](https://mp.weixin.qq.com/s/ZIRcoEWjRzJYXpbU1WVnTg)



## _单页 VS 多页_

### 多页

页面跳转返回 HTML，首屏时间快，SEO 效果好，但页面切换慢

### 单页

页面跳转通过 js 渲染，页面切换快，但是首屏时间稍慢，SEO 差

### vue 组件 name 的用途

-   递归组件时
-   通过 keep-live 使用页面缓存时，可以通过 name 设置某个页面不进行缓存


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

## [vue3 官方文档](https://v3.vuejs.org/guide/installation.html#cli)

## [Vue 组合式 API](https://composition-api.vuejs.org/zh/#%E6%A6%82%E8%BF%B0)

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

## 非Prop的Attribute
可以通过`$attrs`访问
### 禁用Attribute继承
如果你不希望组件的根元素继承 `attribute`，可以在组件的选项中设置 `inheritAttrs: false`。

## v-model 参数
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