# Pinia
全局状态管理工具

[官方文档](https://pinia.vuejs.org/)
[官方中文文档](https://pinia.web3doc.top/)

## 特点
* 完整的ts支持
* 足够轻量，压缩后体积只有1KB左右
* 去除mutations，只有state,getters,actions
* actions 支持同步和异步
* 代码扁平化没有模块嵌套，只有store概念，store之间可以自由使用，每一个store都是独立的
* 无需手动添加store，store一旦创建便会自动添加
* 支持Vue3 和 Vue2

## 安装
`npm i pinia -S`

## 引入
```ts
import { createApp } from 'vue'
// 在main.ts中引入createPinia
import { createPinia } from 'pinia'

import App from './App.vue'

const app = createApp(App)

// 调用use挂载pinia
app.use(createPinia())

app.mount('#app')
```
## 创建store
```ts
import { ref, computed, reactive } from 'vue'
// 通过defineStore定义一个store
import { defineStore } from 'pinia'

// 创建store
export const useCounterStore = defineStore('counter', {
  state: () => {
    return {
      count: 0
    }
  },

  actions: {
    increment() {
      this.count++
    }
  }
})
```

## state

```vue
<template>
  <div>{{ counterStore.count }}</div>
</template>
<script setup lang="ts">
// 在页面script引入创建的store
import { useCounterStore } from '@/stores/counter';

// 实例化store
const counterStore = useCounterStore()
</script>
```

## actions

```vue
<template>
  <div>{{ counterStore.count }}</div>
  <button @click="add">增加</button>
</template>
<script setup lang="ts">
// 在页面script引入创建的store
import { useCounterStore } from '@/stores/counter';

// 实例化store
const counterStore = useCounterStore()

// add
const add = () => {

  // 调用store actions方法
  counterStore.increment()
}
</script>
```

## getters
