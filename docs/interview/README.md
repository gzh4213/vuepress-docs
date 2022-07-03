# JS

## JS执行流程
1. 主线程读取js代码，此时同步环境，执行对应的堆和栈
2. 主线程遇到异步任务，会推给异步线程进行处理
3. 异步进行处理完毕，将对应的异步任务推入任务队列
4. 主线程查询任务队列，执行微任务，将其按照顺序执行，全部执行完毕
5. 主线程查询任务队列，执行宏任务，取得第一个宏任务，执行完毕
6. 重复4，5步骤

## 判断空对象
* JSON.stringify()
* for in 判断
* Object.keys()
* Object.getOwnPropertyNames()

## delete 和Vue.delete
这两种方法对于对象来说其实是没有区别的，使用方法会直接删除对象的属性（物理删除）

但是这两种方法对于数组来说就有区别了。
```
let arr = [1,2,3,4,5]
delete arr[2]  //[1,2,empty,4,5]
Vue.delete arr[2]  //[1,2,4,5]
```
delete只是被删除的元素变成了 empty/undefined 其他的元素的键值还是不变。数组长度也不变。（逻辑删）
Vue.delete是直接删除该元素，长度发生变化。（物理删）

## 移动端适配
```js
// postcss.config.js
const postcssNesting = require('postcss-nesting')
const postcssPx2Viewport = require('postcss-px-to-viewport')

module.exports = {
  plugins: [
    postcssNesting(),
    postcssPx2Viewport({
      viewportWidth: 375
    })
  ]
}
```

## this指向的四种绑定规则

### 1.默认绑定规则 this === window
this 指向 window
````js
// 函数的独立调用 内部this 就指向window
function test () {
  console.log(this === window)
}

test()

// 立即执行函数内部this都指向window
````

### 2.隐式绑定规则
谁调用就指向谁 （隐式丢失，参数赋值）
````js
let a = 0
let obj = {
  a: 2,
  foo: function() {
    cosole.log(this)

    function test() {
      console.log(this)
    }
    test()
  }
}
````

* 闭包：当函数执行的时候，导致函数被定义，并抛出

### 3.显示绑定
* call
* apply
* bind

### 4.new绑定
生成构造函数，this指向实例化之后的对象；构造函数如果有显示return，并且返回是对象，会改变实例的this指向

* 优先级  4 > 3 > 2 > 1

### 箭头函数的this
箭头函数没有绑定的this，只能获取到父级作用域的this，也不存在arguments对象
* 默认绑定规则（独立调用）对箭头函数无效
* 显示、隐式绑定无效
* 不允许当作构造函数去使用 


## 对象的继承

* 构造函数也是函数，和普通函数的区别是通过不同的执行方式，this指向有所区别

### 原型、原型链和构造函数

> prototype、__proto__ 和 constructor


````js
const foo = new Foo()
foo.__proto__ === Foo.prototype

// constructor 是实例、原型上的一个属性，它的值指向构造函数
// 当重写原型时，未定义constructor时， constructor会根据原型链一直往父级寻找

````

### 原型链继承

* 引用值共享问题

````js
function Super () {
  this.a = [1,2,3,4]
}

Super.prototype.say = function () {
  console.log(222)
}

function Sub () {

}

Sub.prototype = new Super()

const sub1 = new Sub()
const sub2 = new Sub()
sub1.a.push(5)

console.log(sub1.a)
console.log(sub2.a)
````

### 构造函数继承
解决引用值共享问题，但没办法拿到原型上面的方法

````js
function Super () {
  this.a = [1,2,3,4]
}

Super.prototype.say = function () {
  console.log(222)
}

function Sub () {
  Super.call(this)
}

// Sub.prototype = new Super()

const sub1 = new Sub()
const sub2 = new Sub()
sub1.a.push(5)

console.log(sub1.a)
console.log(sub2.a)
````

### 组合继承（伪经典继承）
解决以上两个问题，但super执行两次

````js
function Super () {
  this.a = [1,2,3,4]
}

Super.prototype.say = function () {
  console.log(222)
}

function Sub () {
  Super.call(this)
}

Sub.prototype = new Super()

const sub1 = new Sub()
const sub2 = new Sub()
sub1.a.push(5)

console.log(sub1.a)
console.log(sub2.a)
````

### 寄生组合继承（经典继承）
解决伪经典继承中，构造函数复用的问题

````js
function Super () {
  this.a = [1,2,3,4]
}

Super.prototype.say = function () {
  console.log(222)
}

function Sub () {
  Super.call(this)
}

// Sub.prototype = new Super()

if (!Object.create) {
  Object.create = function(proto) {
    function F() {}
    F.prototype = proto
    return new F()
  }
}

// 原型被重写前，Sub.prototype 定义的方法会被重写
Sub.prototype = Object.create(Super.prototype)

const sub1 = new Sub()
const sub2 = new Sub()
sub1.a.push(5)

console.log(sub1.a)
console.log(sub2.a) 
````

### 圣杯模式继承

### extends继承

### 拷贝继承

## Promise

### 迭代器

> 遍历和迭代有什么区别？
> 迭代：从目标源依次逐个抽取的方式来提取数据，目标源一定是有序的，连续的


* 数据类型
  * Array
  * Map
  * Set
  * String
  * TypeArray
  * arguments
  * NodeList

以上数据类型都可以通过 `for...of...`进行遍历, 因为原型上有 `Symbol(Symbol.iterator)` 迭代器接口

`object`原型上没有`Symbol(Symbol.iterator)`迭代器接口,所有不能使用`for...of...`遍历

````js
for (let i of arr) {
  console.log(i)
}

// 获取迭代器对象
let arr = [1,2,3,4]
// 返回一个迭代器对象
let inter = arr[Symbol.iterator]


// 创建迭代器对象
function makeInterator(arr) {
  let index = 0
  return {
    next() {
      if (index < arr.length) {
        return {
          value: arr[index++],
          done: false
        }
      }

      return {
        value: undefined,
        done: true
      }
    }
  }
}

````

### 生成器

````js
// yield 能中断函数的执行
function * test () {
  let value1 = yield 1;
  // value1 的值是在调用第二次调用next时传入的值，诡异的设计
  console.log(value1)
  let value2 = yield 2;
  console.log(value2)
  let value3 = yield 3;
  console.log(value3)
  let value4 = yield 4;
}

const iter = test()
// 只有调用了next，才会开始执行函数，遇到yield 中断函数执行，并返回值
console.log(iter.next('one')) 
console.log(iter.next('two')) 
console.log(iter.next('three')) 
console.log(iter.next('four')) 
console.log(iter.next()) 

````

### promise

状态：
* pending 进行中
* fulfilled 已完成
* rejected 已失败

异步任务完成与否 取决于当前promise的状态，一旦promise状态变化后不可再更改

#### 静态方法
* all

* race

````js
// thenable 对象
let obj = {
  then(resolve, reject) {
    // resolve(11)
    reject(22)
  }
}

// 在执行resolve时，如果传入的是对象，会默认调用then方法
let p1 = Promise.resolve(obj)

p1.then(function(data) {
  console.log(data)
}, function(err) {
  console.log(err)
})  

```` 

````js
// 面试题

// 宏任务 微任务 执行顺序
Promise.resolve().then(function() {
  console.log('promise1')
  setTimeout(_ => {
    console.log('setTimeout2')
  },0)
})

setTimeout(_ => {
  console.log('setTimeout1')
  Promise.resolve().then(function() {
    console.log('promise2')
  })
})

// promise1
// setTimeout1
// promise2
// setTimeout1


// promisify 
function promisify (fn) {
  return function(...args) {
    return new Promise((resolve, reject) => {
      fn(...args, (err, data) => {
        if (err) {
          reject(err)
          return
        }
        resolve(data)
      })
    })
  }
}

````

### async & await

是生成器和执行器的语法糖

````js
// 创建生成器
function * read () {
  let value1 = yield readFile('./txt1.txt')
  let value2 = yield readFile('./txt2.txt')
  let value3 = yield readFile('./txt3.txt')
}

// 创建执行器
function Co(iter) {
  return new Promise((resolve, reject) => {
    function next(data) {
      const {value, done} = iter.next(data)
      if (done) {
        resolve(data)
      } else {
        value.then(res => {
          next(res)
        }, reject)
      }
    }
    next()
  })
}

const promiseTest = Co(read())
promiseTest.then(res => {
  console.log(res)
})

// async await写法
async readSync () {
  let value1 = await readFile('./txt1.txt')
  let value2 = await readFile('./txt2.txt')
  let value3 = await readFile('./txt3.txt')
  return value3
}

const promiseTest1 = readSync()
promiseTest1.then(res => {
  console.log(res)
})

````

## 什么是堆，什么是栈
堆和栈的概念存在于数据结构中和操作系统的内存中

在数据结构中，栈中的数据的存取方式为先进后出。而堆是一个优先队列，是按优先级来进行排序的，优先级可以按照大小来规定。二叉树是堆的一种实现方式

栈区内存由编译器自动分配释放，存放函数的参数值，局部变量的值等

堆区内存一般由程序员分配释放，若程序员不释放，程序结束时可能由垃圾回收机制回收

## js 内置对象

## 什么是浏览器的同源政策
一个域下的js脚本在未经允许的情况下，不能够访问另一个域的内容。这里的同源指的是两个域的协议、域名、端口号必须相同，否则不属于同一个域

同源政策主要限制了三个方面

* 当前域下的js脚本不能访问其他域下的 cookie, localStorage 和 indexDB
* 当前域下的js脚本不能访问操作其他域下的DOM
* 当前域下的ajax无法发送跨域请求

## 如何解决跨域
* 通过jsonp跨域
* document.domain + iframe 跨域
* location.hash + iframe
* window.name + iframe
* postMessage
* 跨域资源共享
* nginx代理跨域
* nodejs 中间件代理跨域
* WebSocket协议跨域

## 手写call,apply,bind函数
````js
Function.prototype.myApply = function(context) {
  // 判断调用对象是否为函数
  if (typeof this !== 'function') {
    throw new TypeError('Error')
  }

  let result = null

  // 判断 context 是否存在，如果未传入则为 window
  context = context || window

  // 将函数设为对象的方法
  context.fn = this

  // 调用方法
  if (arguments[1]) {
    result = context.fn(...arguments[1])
  } else {
    result = context.fn()
  }

  delete context.fn

  return result
}

````

## JS执行机制