---
# sidebar: auto,
# tags:
#   - Vue
---

# vue

[公司要求会使用框架 vue，面试题会被问及哪些？](https://mp.weixin.qq.com/s/ZIRcoEWjRzJYXpbU1WVnTg)

## _单页 VS 多页_

## 多页

页面跳转返回 HTML，首屏时间快，SEO 效果好，但页面切换慢

## 单页

页面跳转通过 js 渲染，页面切换快，但是首屏时间稍慢，SEO 差

## vue 组件 name 的用途

-   递归组件时
-   通过 keep-live 使用页面缓存时，可以通过 name 设置某个页面不进行缓存

## 看一遍 transition,vue-router,vuex 官方文档

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
