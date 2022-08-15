# Vue3组件常用TS类型

## 为props标注类型

通过泛型参数定义`props`类型
```vue
<script setup lang="ts">
  const props = defineProps<{
    foo: string
    bar?: number
  }>()
</script>
```

也可以将`props`的类型定义在一个单独的接口中：
```vue
<script setup lang="ts">
interface Props {
  foo: string
  bar?: number
}

const props = defineProps<Props>()
</script>
```

### 使用类型声明时的默认 props 值
针对类型的 `defineProps` 声明的不足之处在于，它没有可以给 `props` 提供默认值的方式。为了解决这个问题，我们还提供了 `withDefaults` 编译器宏：
```js
export interface Props {
  msg?: string
  labels?: string[]
}

const props = withDefaults(defineProps<Props>(), {
  msg: 'hello',
  labels: () => ['one', 'two']
})
```

## 为emits标注类型
基于类型的声明
```vue
<script setup lang="ts">
// 运行时
const emit = defineEmits(['change', 'update'])

// 基于类型
const emit = defineEmits<{
  (e: 'change', id: number): void
  (e: 'update', value: string): void
}>()
</script>
```

## 为ref()标注类型

### 通过接口指定类型
有时我们可能想为ref内的值指定一个更复杂的类型，可以通过使用Ref这个接口
```ts
import { ref } from 'vue'
import type { Ref } from 'vue'

const year: Ref<string | number> = ref('2020')

year.value = 2020 // 成功！
```

### 通过泛型指定类型
在调用ref()时传入一个泛型参数，来覆盖默认的推导行为：
```ts
// 得到的类型：Ref<string | number>
const year = ref<string | number>('2020')

year.value = 2020 // 成功！
```

如果你指定了一个泛型参数但没有给出初始值，那么最后得到的就将是一个包含 undefined 的联合类型：
```js
// 推导得到的类型：Ref<number | undefined>
const n = ref<number>()
```

## 为reactive() 标注类型
要显式的指定一个reactive变量的类型，可以使用接口：
```ts
import { reactive } from 'vue'

interface Book {
  title: string
  year?: number
}

const book: Book = reactive({ title: 'Vue 3 指引' })
```

## 为computed() 标注类型
通过泛型参数显式的指定类型：
```ts
const double = computed<number>(() => {
  // 若返回值不是 number 类型则会报错
})
```

## 为事件处理函数标注类型
```ts
function handleChange(event: Event) {
  console.log((event.target as HTMLInputElement).value)
}
```

## 为proview/inject标注类型
`provide` 和 `inject` 通常会在不同的组件中运行。要正确地为注入的值标记类型，Vue 提供了一个 `InjectionKey` 接口，它是一个继承自 `Symbol` 的泛型类型，可以用来在提供者和消费者之间同步注入值的类型：

```ts
import { provide, inject } from 'vue'
import type { InjectionKey } from 'vue'

const key = Symbol() as InjectionKey<string>

provide(key, 'foo') // 若提供的是非字符串值会导致错误

const foo = inject(key) // foo 的类型：string | undefined
```

建议将注入 key 的类型放在一个单独的文件中，这样它就可以被多个组件导入。

当使用字符串注入 key 时，注入值的类型是 unknown，需要通过泛型参数显式声明：

```ts
const foo = inject<string>('key') // 类型：string | undefined
```
注意注入的值仍然可以是 undefined，因为无法保证提供者一定会在运行时 provide 这个值。当提供了一个默认值后，这个 undefined 类型就可以被移除：
```ts
const foo = inject<string>('foo', 'bar') // 类型：string
```
如果你确定该值将始终被提供，则还可以强制转换该值：
```ts
const foo = inject('foo') as string
```

## 为dom模板引用标注类型
模板 ref 需要通过一个显式指定的泛型参数和一个初始值 null 来创建：
```vue
<script setup lang="ts">
import { ref, onMounted } from 'vue'

const el = ref<HTMLInputElement | null>(null)

onMounted(() => {
  el.value?.focus()
})
</script>

<template>
  <input ref="el" />
</template>
```

注意为了严格的类型安全，有必要在访问 el.value 时使用可选链或类型守卫。这是因为直到组件被挂载前，这个 ref 的值都是初始的 null，并且 v-if 将引用的元素卸载时也会被设置为 null

## 为组件模板引用标注类型
有时，我们需要为一个子组件添加一个模板 ref，以便调用它公开的方法。比如，我们有一个 MyModal 子组件，它有一个打开模态框的方法：

```vue
<!-- MyModal.vue -->
<script setup lang="ts">
import { ref } from 'vue'

const isContentShown = ref(false)
const open = () => (isContentShown.value = true)

defineExpose({
  open
})
</script>
```

为了获取 MyModal 的类型，我们首先需要通过 typeof 得到其类型，再使用 TypeScript 内置的 InstanceType 工具类型来获取其实例类型：

```vue
<!-- App.vue -->
<script setup lang="ts">
import MyModal from './MyModal.vue'

const modal = ref<InstanceType<typeof MyModal> | null>(null)

const openModal = () => {
  modal.value?.open()
}
</script>
```

参考文档：

[https://mp.weixin.qq.com/s/lc0yf6OBIUDYON8GxmIEeg](https://mp.weixin.qq.com/s/lc0yf6OBIUDYON8GxmIEeg)
