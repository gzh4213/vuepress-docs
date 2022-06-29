# Vue

## 1.Vue组件之间通信方式有哪些？

* props
* $emit/$on
* $children/$parent 
* $attrs/$listeners
* ref 
* $root
* eventbus
* vuex

vue3中使用mitt代替eventbus

* 父子组件
  * `props`,`$emit`,`$parent`,`ref`,`$attrs`
* 兄弟组件
  * `$parent`,`$root`,`eventbus`,`vuex`
* 跨层级关系
  * `eventbus`,`vuex`,`provide`+`inject`

## 2.v-if 和 v-for的优先级
vue2 v-for 优先级 高于 v-if
vue3 v-for 优先级 低于 v-if

## 3.简述Vue声明周期
Vue生命周期总共可以分为8个阶段：创建前后、载入前后、更新前后、销毁前后
Vue3中新增了三个用于调试和服务端渲染的场景

## 4.双向绑定原理
* vue中双向绑定是一个指令`v-model`，它是一个语法糖，默认是:value 和 @input，可以绑定一个响应式数据到视图，更新视图对应数据可以同时改变
* 通常在表单上使用，还可以在自定义组件上使用，表示某个值的输入输出控制
* Vue3中 改为modelValue 和 update:modelValue 的组合，还可以指定多个 v-model

## 5.如何扩展一个组件
* 常见的组件扩展方法有： mixins, slots, extends等
* mixins可能遇到使用多个mixins时，定义的变量名冲突，不好排查，不透明不灵活

Vue.extend 又是什么？

## 6.子组件是否可以直接改变父组件的数据
开发遵循单向数据流，避免子组件更改父组件数据，使数据无法理解

## 7.Vue权限管理怎么做？控制到按钮级别的权限怎么做
通常由服务端实现，在权限管理系统根据角色配置相应的权限，在登录前端页面时会返回权限列表，打开某个页面或者按钮时，查询是否有权限

## 8.原理--说说对vue响应式的理解
* 所谓数据响应式就是能够使数据变化可以被检测并对这种变化做出响应的机制
* MVVM框架中要解决的一个核心问题是连接数据层和视图层，通过数据驱动应用，数据变化，视图更新，要做到这点就需要对数据做响应式处理，这样一旦数据发生变化就可以立即做出更新处理
* vue2根据数据类型来做不同的处理， 对象采用 Object.defineProperty的方式定义数据拦截，数组对7个变更方法做了封装，但存在一些缺点：初始化时的递归遍历会造成性能损失，无法监听到属性的变化和删除， 数组的length无法监听，对ES6的 Set, Map这些数据接口不支持
* vue3 使用Proxy代理处理响应式数据，初始化性能和内存消耗得到很大的改善

## 9.原理--说说对虚拟DOM的理解
* 就是虚拟的dom对象，本身就是一个JavaScript对象，只不过它是通过不同的属性去描述一个视图结构
* 将真实的元素节点抽象成VNode,有效减少直接操作dom的次数，从而提高程序性能
* 方便跨平台使用
* 如何生成？ template --(compile 编译)--> render funtion --> VNode --> 真实DOM

## 10.原理--diff算法
* diff算法称为 patching算法， 由Snabbdom修改而来，虚拟DOM要想转化为真实DOM就需要通过patch方法转换
* 最初Vue1.x中没有diff算法，视图中的每个响应数据依赖都有对应的更新函数，可以做到精准更新，因此不需要虚拟DOM和patching算法，但粒度过细导致Vue1.x无法承载较大的应用，Vue2中为了降低Watcher粒度，提升性能，使每个组件对应一个Watcher，因此需要引入diff算法才能精确找到发生变化的地方并高效更新
* diff算法执行的时刻是在组件内响应式数据发生变化时触发实例执行更新函数，更新函数会再次执行render函数获取最新的虚拟dom，然后执行patch函数，对新老虚拟DOM进行对比，找到两者发生变化的地方进行更新，最后转化为真实DOM
* patch是一个递归的过程，遵循深度优先，同层比较的策略，以vue3的pathc为例：
  * 首先判断两个节点是否为相同同类节点，不同则删除重新创建
  * 如果双方都是元素节点则递归更新子元素，同时更新元素属性
  * 
* vue3中引入的更新策略：编译器优化 patchFlags、block等

## 11.Vue3新特性
* API层面
  * Compositon API
  * SFC Compositon API 语法糖
  * Teleport传送门
  * Fragments 片段
  * Emits选项
  * 自定义渲染器
  * SFC CSS变量
  * Suspense
* 框架改进
  * 更快
    * 虚拟DOM重写
    * 编译器优化：静态提升、patchFlags、block等
    * 基于Proxy的响应式系统
  * 更小
    * 更好的摇树优化
  * 更容易维护
    * TypeScript + 模块化
  * 更容易扩展
    * 独立的响应化模块
    * 自定义渲染器
## 12.动态路由
* 很多时候，我们需要将给定的匹配模式的路由映射到同一个组件，这种情况就需要定义动态路由
## 13.从零实现一个vue路由
* vue路由要解决的问题：用户点击跳转链接，内容切换，页面不刷新
* 借助hash或history api实现url跳转页面不刷新
* 同时监听hashchange事件，或者popstate事件处理跳转
* 根据hash值或者state值从routes表中匹配对应component并渲染
## 14.key的作用
key的主要作用是 patch算法过程中更高效，判断是否是相同节点 是通过 key和tag

## 15.nextTick原理
* nextTick是等待下一次DOM更新刷新的工具方法
* Vue有个异步更新策略，意思是如果数据变化，Vue是不会立即更新DOM，而是开启一个队列，把组件更新函数保存在队列中，在同一事件循环中发生的所有数据变更会异步的批量更新。这一策略导致我们对数据的修改不会立刻体现在DOM上，此时如果想要获取更新后的DOM状态，就需要使用nextTick

## 16.watch和computed的区别以及选择
computed 是具有响应式的返回值，降低模版中表达式的复杂性，具有缓存性、懒加载
watch 是监听数据的变化，执行回调

watch 和 watchEffect 区别

## 17.子组件和父组件的创建和挂在顺序
创建过程自上而下，挂在过程自下而上

## 18.如何缓存当前组件、更新
缓存组件使用 keep-alive, 使用 include和exclude可以指定或排除

## 19.从0-1构建Vue项目

## 20.工作中最佳的项目实践

## 21.vuex理解
全局集中式状态管理模式库， 

## 22.从template到render发生了什么

## 23.Vue实例过程中发生了什么
初始化 建立更新机制

初始化会创建组件实例， 初始化组件状态， 创建各种响应式数据

## 24.Vue性能优化方法
* 路由懒加载
* KeepAlive 缓存页面，避免重复创建实例
* 长列表性能优化：vue-virtual-scroller
* 定时器销毁
* 图片懒加载 vue-lazyload
* 组件库按需加载

## 25.vue为什么只能有一个根元素
Vue3支持多个根节点