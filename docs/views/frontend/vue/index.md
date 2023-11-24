---
# sidebar: auto,
# tags:
#   - Vue
---

# 指南

[vue3 官方文档](https://cn.vuejs.org/)

MVVM(Model-View-ViewModel)架构

1. View: 视图层
2. ViewModel: 业务逻辑层（一切js可视为业务逻辑）
3. Model: 数据层（存储数据及对数据的处理如增删改查）

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

