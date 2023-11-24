# API
## 响应式：核心
### ref()
接受一个内部值，返回一个响应式的、可更改的 `ref` 对象，此对象只有一个指向其内部值的 property `.value`。

`ref` 对象是可更改的，也就是说你可以为 `.value` 赋予新的值。它也是响应式的，即所有对 `.value` 的操作都将被追踪，并且写操作会触发与之相关的副作用。

如果将一个对象赋值给 `ref`，那么这个对象将通过 `reactive()` 转为具有深层次响应式的对象。这也意味着如果对象中包含了嵌套的 `ref`，它们将被深层地解包。

若要避免这种深层次的转换，请使用 `shallowRef()` 来替代。

### reactive()
返回一个对象的响应式代理。

响应式转换是“深层”的：它会影响到所有嵌套的 property。一个响应式对象也将深层地解包任何 `ref` property，同时保持响应性。

值得注意的是，当访问到某个响应式数组或 `Map` 这样的原生集合类型中的 `ref` 元素时，不会执行 `ref` 的解包。

若要避免深层响应式转换，只想保留对这个对象顶层次访问的响应性，请使用 `shallowReactive()` 作替代。

返回的对象以及其中嵌套的对象都会通过 ES Proxy 包裹，因此不等于源对象，建议只使用响应式代理，避免依赖于原始对象。

### readonly()
接受一个对象 (不论是响应式还是一般的) 或是一个 `ref`，返回一个原值的只读代理。

只读代理是深层的：对任何嵌套 property 的访问都将是只读的。它的 `ref` 解包行为与 reactive() 相同，但解包得到的值是只读的。

要避免深层级的转换行为，请使用 `shallowReadonly()` 作替代。

### computed ()
接受一个 `getter` 函数，返回一个只读的响应式 `ref` 对象，即 `getter` 函数的返回值。它也可以接受一个带有 `get` 和 `set` 函数的对象来创建一个可写的 `ref` 对象。

### watch()
侦听一个或多个响应式数据源，并在数据源变化时调用所给的回调函数。
### watchEffect()
立即运行一个函数，同时响应式地追踪其依赖，并在依赖更改时重新执行。
## 响应式：工具
### isRef
检查某个值是否为 `ref`。
### toRef()
可用于为响应式对象上的 property 创建 `ref`。这样创建的 `ref` 与其源 property 保持同步：改变源 property 将更新 `ref`，反之亦然。
### toRefs()
将一个响应式对象转换为一个普通对象，这个普通对象的每个 `property` 都是指向源对象相应 `property` 的 `ref`。每个单独的 `ref` 都是使用 `toRef()` 创建的。

## 响应式：进阶
### shallowRef()
`ref()` 的浅层作用形式。

和 `ref()` 不同，浅层 `ref` 的内部值将会原样存储和暴露，并且不会被深层递归地转为响应式。只有对 `.value` 的访问是响应式的。
`shallowRef()` 常常用于对大型数据结构的性能优化或是与外部的状态管理系统集成。
### triggerRef()
强制触发依赖于一个浅层 `ref` 的副作用，这通常在对浅引用的内部值进行深度变更后使用。

### customRef()

### shallowReactive()
`reactive()` 的浅层作用形式。

和 reactive() 不同，这里没有深层级的转换：一个浅层响应式对象里只有根级别的 property 是响应式的。property 的值会被原样存储和暴露，这也意味着值为 ref 的 property 不会被自动解包了。

### toRaw()
根据一个 Vue 创建的代理返回其原始对象。

`toRaw()` 可以返回由 `reactive()`、`readonly()`、`shallowReactive()` 或者 `shallowReadonly()` 创建的代理对应的原始对象。

这是一个可以用于临时读取而不引起代理访问/跟踪开销，或是写入而不触发更改的特殊方法。不建议保存对原始对象的持久引用，请谨慎使用。



## 应用配置

### errorHandler
处理组件渲染函数和侦听器执行期间抛出的未捕获错误

### warnHandler
为 Vue 的运行时警告指定一个自定义处理函数。注意这只会在开发环境下生效，在生产环境下它会被忽略。

### globalProperties
* 用法
````js
// 之前 (Vue 2.x)
Vue.prototype.$http = () => {}

// 之后 (Vue 3.x)
const app = createApp({})
app.config.globalProperties.$http = () => {}
````
添加一个可以在应用的任何组件实例中访问的全局 property。组件的 property 在命名冲突时具有优先权。

### optionMergeStrategies
* 用法
````js
const app = createApp({
  mounted() {
    console.log(this.$options.hello)
  }
})

app.config.optionMergeStrategies.hello = (parent, child) => {
  return `Hello, ${child}`
}

app.mixin({
  hello: 'Vue'
})

// 'Hello, Vue'
````
为自定义选项定义合并策略。
合并策略选项分别接收在父实例和子实例上定义的选项的值作为第一个和第二个参数。

### performance
设置为 `true` 以在浏览器开发工具的 `performance/timeline` 面板中启用对组件初始化、编译、渲染和更新的性能追踪。只适用于开发模式和支持 `performance.mark` API 的浏览器。

### compilerOptions *3.1+*
配置运行时编译器的选项。设置在这个对象上的值将会被传入浏览器内的模板编译器，并影响配置过的应用内的每个组件。注意，你也可以使用 compilerOptions 选项在每个组件的基础上覆写这些选项。

#### compilerOptions.isCustomElement
````js
// 任何以 'ion-' 开头的元素都会被识别为自定义元素
app.config.compilerOptions.isCustomElement = tag => tag.startsWith('ion-')
````
指定一个方法来识别 `Vue` 以外 (例如通过 `Web Components API`) 定义的自定义元素。如果一个组件匹配了这个条件，它就不需要在本地或全局注册，`Vue` 也不会抛出 `Unknown custom element` 的警告。

#### compilerOptions.whitespace
* 类型： `'condense' | 'preserve'`
* 默认值： `'condense'`
* 用法：
````js
app.config.compilerOptions.whitespace = 'preserve'
````
默认情况下，Vue 会移除/压缩模板元素之间的空格以产生更高效的编译结果：

1. 元素内的多个开头/结尾空格会被压缩成一个空格
2. 元素之间的包括折行在内的多个空格会被移除
3. 文本结点之间可被压缩的空格都会被压缩成为一个空格
4. 将值设置为 `'preserve'` 可以禁用 (2) 和 (3)。

#### compilerOptions.delimiters
* 默认值： `['{{', '}}']`
* 用法：
````js
// 将分隔符设置为 ES6 模板字符串风格
app.config.compilerOptions.delimiters = ['${', '}']    
````
用于配置模板内文本插值的分隔符。

这个选项一般会用于避免和同样使用双大括号语法的服务端框架发生冲突。

#### compilerOptions.comments
* 默认值： `false`
* 用法：
````js
app.config.compilerOptions.comments = true 
````
默认情况下，Vue 会在生产环境下移除模板内的 HTML 注释。将这个选项设置为 true 可以强制 Vue 在生产环境下保留注释。而在开发环境下注释是始终被保留的。

这个选项一般会用于依赖 HTML 注释的其它库和 Vue 配合使用。

## 应用API
在 Vue 3 中，全局改变 Vue 行为的 API 现在被移动到了由新的 createApp 方法所创建的应用实例上。此外，现在它们的影响仅限于该特定应用实例：
````js
import { createApp } from 'vue'

const app = createApp({})
````
调用 `createApp` 返回一个应用实例。该实例提供了一个应用上下文。应用实例挂载的整个组件树共享相同的上下文，该上下文提供了之前在 Vue 2.x 中的“全局”配置。

另外，由于 createApp 方法返回应用实例本身，因此可以在其后链式调用其它方法，这些方法可以在以下部分中找到。

### component
注册或检索全局组件。注册还会使用给定的 name 参数自动设置组件的 name。
* 返回值
  * 如果传入 definition 参数，则返回应用实例。
  * 如果不传入 definition 参数，则返回组件定义。
````js
import { createApp } from 'vue'

const app = createApp({})

// 注册一个选项对象
app.component('my-component', {
  /* ... */
})

// 检索注册的组件
const MyComponent = app.component('my-component')
````

### config
一个包含应用配置的对象。
````js
import { createApp } from 'vue'
const app = createApp({})

app.config = {...}
````

### directive
* 返回值
  * 如果传入 definition 参数，则返回应用实例。
  * 如果不传入 definition 参数，则返回指令定义。

注册或检索全局指令

````js
import { createApp } from 'vue'
const app = createApp({})

// 注册
app.directive('my-directive', {
  // 指令具有一组生命周期钩子：
  // 在绑定元素的 attribute 或事件监听器被应用之前调用
  created() {},
  // 在绑定元素的父组件挂载之前调用
  beforeMount() {},
  // 在绑定元素的父组件挂载之后调用
  mounted() {},
  // 在包含组件的 VNode 更新之前调用
  beforeUpdate() {},
  // 在包含组件的 VNode 及其子组件的 VNode 更新之后调用
  updated() {},
  // 在绑定元素的父组件卸载之前调用
  beforeUnmount() {},
  // 在绑定元素的父组件卸载之后调用
  unmounted() {}
})

// 注册 (函数指令)
app.directive('my-directive', () => {
  // 这将被作为 `mounted` 和 `updated` 调用
})

// getter, 如果已注册，则返回指令定义
const myDirective = app.directive('my-directive')

````

### mixin
将一个 mixin 应用在整个应用范围内。一旦注册，它们就可以在当前的应用中任何组件模板内使用它。插件作者可以使用此方法将自定义行为注入组件。不建议在应用代码中使用。

### mount
所提供 DOM 元素的 `innerHTML` 将被替换为应用根组件的模板渲染结果。
````html
<body>
  <div id="my-app"></div>
</body>
````
````js
import { createApp } from 'vue'

const app = createApp({})
// 做一些必要的准备
app.mount('#my-app')
````

### provide
设置一个可以被注入到应用范围内所有组件中的值。组件应该使用 `inject` 来接收 `provide` 的值。

从 `provide`/`inject` 的角度来看，可以将应用程序视为根级别的祖先，而根组件是其唯一的子级。

该方法不应该与 `provide` 组件选项或组合式 API 中的 `provide` 方法混淆。虽然它们也是相同的 `provide`/`inject` 机制的一部分，但是它们是用来配置组件而非应用所 `provide` 的值。

通过应用提供值在编写插件时尤其有用，因为插件一般不能使用组件来提供值。这是对 `globalProperties` 的替代选择。
````js
import { createApp } from 'vue'

const app = createApp({
  inject: ['user'],
  template: `
    <div>
      {{ user }}
    </div>
  `
})

app.provide('user', 'administrator')
````

### unmount
卸载应用实例的根组件
````html
<body>
  <div id="my-app"></div>
</body>
````
````js
import { createApp } from 'vue'

const app = createApp({})
// 做一些必要的准备
app.mount('#my-app')

// 挂载 5 秒后，应用将被卸载
setTimeout(() => app.unmount(), 5000)
````

### use
安装 Vue.js 插件。如果插件是一个对象，则它必须暴露一个 `install` 方法。如果插件本身是一个函数，则它将被视为 `install` 方法。

该 `install` 方法将以应用实例作为第一个参数被调用。传给 `use` 的其他 `options` 参数将作为后续参数传入该安装方法。

当在同一个插件上多次调用此方法时，该插件将仅安装一次。
````js
import { createApp } from 'vue'
import MyPlugin from './plugins/MyPlugin'

const app = createApp({})

app.use(MyPlugin)
app.mount('#app')
````

### version
以字符串形式提供已安装的 Vue 的版本号。这对于基于不同版本使用不同策略的社区插件来说特别有用。
````js
export default {
  install(app) {
    const version = Number(app.version.split('.')[0])
    if (version < 3) {
      console.warn('This plugin requires Vue 3')
    }
    // ...
    }
  }
````

## 全局API

### createApp
返回一个提供应用上下文的应用实例。应用实例挂载的整个组件树共享同一个上下文。
````js
const app = createApp({})
````

### h
返回一个”虚拟节点“，通常缩写为 VNode：一个普通对象，其中包含向 Vue 描述它应在页面上渲染哪种节点的信息，包括所有子节点的描述。它的目的是用于手动编写的渲染函数：
````js
render() {
  return h('h1', {}, 'Some title')
}
````

### defineComponent
从实现上看，defineComponent 只返回传递给它的对象。但是，就类型而言，返回的值有一个合成类型的构造函数，用于手动渲染函数、TSX 和 IDE 工具支持。

* 参数
具有组件选项的对象
````js
import { defineComponent } from 'vue'

const MyComponent = defineComponent({
  data() {
    return { count: 1 }
  },
  methods: {
    increment() {
      this.count++
    }
  }
})
````

或者是一个 setup 函数，函数名称将作为组件名称来使用
````js
import { defineComponent, ref } from 'vue'

const HelloWorld = defineComponent(function HelloWorld() {
  const count = ref(0)
  return { count }
})
````

### defineAsyncComponent
创建一个只有在需要时才会加载的异步组件。

### defineCustomElement
该方法接受和 defineComponent 相同的参数，但是返回一个原生的自定义元素，该元素可以用于任意框架或不基于框架使用。

### resolveComponent
如果在当前应用实例中可用，则允许按名称解析 component。

返回一个 Component。如果没有找到，则返回接收的参数 name。

### resolveDynamicComponent
允许使用与 `<component :is="">` 相同的机制来解析一个 `component。`

返回已解析的 `Component` 或新创建的 `VNode`，其中组件名称作为节点标签。如果找不到 Component，将发出警告。

### resolveDirective
如果在当前应用实例中可用，则允许通过其名称解析一个 directive。

返回一个 Directive。如果没有找到，则返回 undefined。

### withDirectives
允许将指令应用于 VNode。返回一个包含应用指令的 VNode。

### createRenderer
createRenderer 函数接受两个泛型参数： HostNode 和 HostElement，对应于宿主环境中的 Node 和 Element 类型。

### nextTick
将回调推迟到下一个 DOM 更新周期之后执行。在更改了一些数据以等待 DOM 更新后立即使用它。

### mergeProps
将包含 VNode prop 的多个对象合并为一个单独的对象。其返回的是一个新创建的对象，而作为参数传递的对象则不会被修改。

可以传递不限数量的对象，后面参数的 property 优先。事件监听器被特殊处理，class 和 style 也是如此，这些 property 的值是被合并的而不是覆盖的。

### useCssModule
允许在 setup 的单文件组件函数中访问 CSS 模块。

### version
以字符串形式提供已安装的 Vue 的版本号。









### params
* props
  * 类型检查
    * String
    * Number
    * Boolean
    * Array
    * Object
    * Date
    * Function
    * Symbol
  * validator 自定义验证函数
* template
* emits

## mount

## $emit
在父级组件监听事件的时候，可以通过`$event`访问到被抛出的值

## provied/inject

## defineAsyncComponent

## Suspense



# TODO
* v-modal