# 手写方法

## new 重写
```js
function Person (name) {
  this.name = name
}

Person.prototype.say = function () {
  console.log('hello')
}

Function.prototype.new = function() {
  // 获取this，这里的this指向调用new方法的对象，即Person
  const fn = this
  // new方法创建实例对象，返回一个实例对象
  let obj = {}
  // 因为实例对象的原型 === 构造函数的原型
  obj = Object.create(fn.prototype)
  // 还需要获取构造函数的实例属性和方法,所以调用fn，并把this指向obj
  const FnRes = fn.apply(obj, arguments)
  // 还需要判断 构造函数是否返回了引用类型的值
  return FnRes instanceof Object ? FnRes : obj
}

// 创建一个实例对象
const p = Person.new('zhangsan')

// 调用实例对象方法
p.say()
console.log(p)

```

## class 重写
```js
/* 
1. class 不能提升
2. class 只能通过new 实例
3. class 是采用严格模式
4. class 的原型上的属性不能遍历
5. 在class内部不能修改class的名称
*/

// class Person {
//   constructor(name, age) {
//     this.name = name
//     this.age = age
//   }
//   say() {
//     console.log('say')
//   }

//   sayHi () {
//     console.log('say hi')
//   }

//   static eat () {
//     console.log(eat)
//   }
// }

function Person (name, age) {
  "use strict"
  var name = (arguments.length > 0 && arguments[0] !== undefined) ? arguments[0] : name
  var age = (arguments.length > 1 && arguments[1] !== undefined) ? arguments[1] : name
  classCheck(this, Person)
  this.name = name
  this.age = age
}

function classCheck (instance, constructor) {
  // if (typeof new.target === undefined) {
  //   throw new Error('必须通过new执行')
  // }

  if (!(instance instanceof constructor)) {
    throw new Error('必须通过new执行')
  }
}
var createClass = (function () {
  function defineProperties(target, props) {
    for(let i = 0; i < props.length; i++) {
      let descriptor = props[i]
      // console.log(descriptor)
      descriptor.enumerable = descriptor.enumerable || false
      descriptor.configurable = descriptor.configurable || false

      Object.defineProperty(target, descriptor.key, descriptor)
    }
  }
  return function(constructor, protoProps, staticProps) {
    if(protoProps) defineProperties(constructor.prototype, protoProps)
    if(staticProps) defineProperties(constructor, staticProps)
  }
})()

createClass(Person, [
  {
    key: 'say',
    value: function() {
      console.log('hello')
    }
  },
  {
    key: 'sayHi',
    value: function() {
      console.log('sayHi')
    }
  }
], [
  {
    key: 'eat',
    value: function() {
      console.log('eat')
    }
  }
])

const a = new Person('xiaoming', 19)
for(let i in a) {
  console.log(i)
}
// console.log(a)

```

## call apply 重写
```js

// call
function randomString () {
  return Math.random().toString(36).substr(3,6) + new Date().getTime().toString(36)
}
Function.prototype.myCall = function(context) {
  if (typeof context ==='object' && typeof context !== null) {
    var prop = randomString()
    let args = []
    for (let i = 1; i < arguments.length; i++) {
      args.push(arguments[i])
    }
    context[prop] = this
    var res = eval("context[prop](" + args + ")")
    delete context[prop]
    return res
  }
}
Function.prototype.myApply = function(context) {
  if (typeof context ==='object' && typeof context !== null) {
    var prop = randomString()
    let args = []
    for (let i = 0; i < arguments[1].length; i++) {
      args.push(arguments[1][i])
    }
    context[prop] = this
    var res = eval("context[prop](" + args + ")")
    delete context[prop]
    return res
  }
}

function person (a, b) {
  console.log( this, a, b)
  return a + b
}

// person.myCall({d: 'd'}, 1,2)
person.myApply({d: 'd'},[1,2])

```

## bind 重写 
```js
/* 
1. 偏函数特性
2. 原型的问题
 */

// Function.prototype.bind1 = function(context) {
//   // 获取this，调用方法对象
//   const fn = this
//   // 获取bind时传入的参数
//   const args = Array.prototype.slice.call(arguments, 1)
//   const reFn = function () {
//     // 获取第二次传入的参数
//     const innerArgs = Array.prototype.slice.call(arguments)
//     // 调用方法绑定传入的上下文对象，传入所有参数，并返回方法调用的值
//     return fn.apply(context, args.concat(innerArgs))
//   }

//   function Buffer () {}
//   Buffer.prototype = fn.prototype
//   reFn.prototype = new Buffer()
//   return reFn
// }

Function.prototype.myBind = function(context) {
  const fn = this
  const args = Array.prototype.slice.call(arguments, 1)
  const reFn = function () {
    const innerArgs = Array.prototype.slice.call(arguments)
    return fn.apply(context, args.concat(innerArgs))
  }

  function Buffer () {}
  Buffer.prototype = fn.prototype
  reFn.prototype = new Buffer()

  return reFn
}

var obj = {}
function Person (name, age) {
  this.name = name
  this.age = age
}

Person.prototype.say = function () {
  console.log('hello')
}

const Person1 = Person.bind1(obj)

const p1 = new Person1()

p1.say()

// function test (a, b) {
//   console.log(a, b)
//   return a + b
// }

// test.bind(obj, 1, 2)()
// test.bind(obj, 1)(2)
// test.bind(obj)(1, 2)
```

## forEach
```js
Array.prototype.myForEach = function (fn) {
  var arr = this
  var context = arguments[1] || window
  if(typeof fn === 'function') {
    for (var i = 0; i < arr.length; i++) {
      fn.apply(context, [arr[i], i, arr])
    }
  } else {
    throw new Error('参数必须传入一个方法')
  }
}

var arr = [1,2,3,4]
arr.myForEach((item, index, arr) => {
  console.log(item, index, arr)
})
```

## map
```js
Array.prototype.myMap = function(fn) {
  var arr = this
  var context = arguments[1] || {}
  var res = []
  if (typeof fn === 'function') {
    for (let i = 0; i < arr.length; i++) {
      res.push(fn.apply(context, [arr[i], i, arr])) 
    }
  } else {
    throw new Error('参数必须传入一个方法')
  }
  return res
}

var arr = [1,2,3,4]
var obj = {}

var res = arr.map(function(item, index, arr) {
  console.log(item, index, arr)
  return item * 2
}, obj)
console.log(res);

```

## filter
```js
Array.prototype.myFilter = function(fn) {
  var arr = this
  var context = arguments[1] || {}
  var res = []
  if (typeof fn === 'function') {
    for (let i = 0; i < arr.length; i++) {
      fn.apply(context, [arr[i], i, arr]) ? res.push(arr[i]) : undefined
    }
  } else {
    throw new Error('参数必须传入一个方法')
  }
  return res
}

var arr = [1,2,3,4]
var obj = {}

var res = arr.myFilter(function(item, index, arr) {
  console.log(item, index, arr)
  return item % 2
}, obj)
console.log(res);

```

## some every
```js


Array.prototype.mySome = function(fn) {
  var arr = this
  var context = arguments[1] || {}
  var res = false
  if (typeof fn === 'function') {
    for (let i = 0; i < arr.length; i++) {
      if(fn.apply(context, [arr[i], i, arr])) {
        res = true
        break
      }
    }
  } else {
    throw new Error('参数必须传入一个方法')
  }
  return res
}

Array.prototype.myEvery = function(fn) {
  var arr = this
  var context = arguments[1] || {}
  var res = true
  if (typeof fn === 'function') {
    for (let i = 0; i < arr.length; i++) {
      if(!fn.apply(context, [arr[i], i, arr])) {
        res = false
        break
      }
    }
  } else {
    throw new Error('参数必须传入一个方法')
  }
  return res
}

var arr = [1,2,3,4]
var obj = {}

var res = arr.myEvery(function(item, index, arr) {
  console.log(item, index, arr)
  return item % 2
}, obj)
console.log(res);
```

## reduce
```js
var arr = [1,2,3,4]
var obj = {}

arr.reduce((prev, item, index, arr) => {
  console.log(prev, item, index, arr)
  return prev + item
})

Array.prototype.myReduce = function (fn, prev) {
  var arr = this
  var i = 0
  if (typeof fn !== 'function') {
    throw new Error('第一个参数必须是函数')
  } 

  // if (typeof prev === 'undefined') {
  //   prev = arr[0]
  //   for(var i = 1; i < arr.length; i++) {
  //     prev = fn(prev, arr[i], i, arr)
  //   }
  // } else {
  //   for(var i = 0; i < arr.length; i++) {
  //     prev = fn(prev, arr[i], i, arr)
  //   }
  // }

  if (typeof prev === 'undefined') {
    prev = arr[0]
    i = 1
  }
  for(; i < arr.length; i++) {
    prev = fn(prev, arr[i], i, arr)
  }

  return prev
}

const res1 = arr.myReduce((prev, item, index, arr) => {
  console.log(prev, item, index, arr)
  return prev + item
})

console.log(res1)
```

## 防抖和节流
限制函数的执行次数

1. 防抖：通过setTimeout 的方式，在一定时间间隔内，将多次触发变成一次
2. 节流：减少一段时间内的触发频率

````js
/**
 * 函数防抖
 * 重点处理this指向和参数传递
 * @param {*} fn 
 * @returns 
 */
function debounce (fn, timer) {
	let t = null
	return function() {
		const firstClick = !t
		if (t) clearTimeout(t)
		if (firstClick) {
			fn.apply(this, arguments)
		}
		t = setTimeout(() => {
			t = null
		}, timer)
	}
}

/**
 * 函数节流
 */
function throttle (fn, delay) {
	let begin = 0
	return function () {
		const cur = Date.now()
		if (cur - brgin > delay) {
			fn.apply(this, arguments)
			begin = cur
		} 
	}
}
````

## 发布订阅模式
```js
class EventEmiteer {
  constructor() {
    // 用来存放注册的事件和回调
    this._events = {}
  }

  on(eventName, callback) {
    const callbacks = this._events[eventName] || []
    callbacks.push(callback)
    this._events[eventName] = callbacks
  }

  emit(eventName, ...args) {
    const callbacks = this._events[eventName]
    if (callbacks) {
      callbacks.forEach(cb => cb.apply(this, args))
    }
  }

  off(eventName, callback) {
    let callbacks = this._events[eventName]
    if (callbacks && callback) {
      let cbIndex = callbacks.indexOf(callback)
      callbacks = callbacks.splice(cbIndex, 1)
    }
  }

  once(eventName, callback) {
    const fn = (...args) => {
      callback.apply(this, args)
      this.off(eventName, fn)
    }
    this.on(eventName, fn)
  }
}

const o = new EventEmiteer()
o.on('post', (...args) => {
  console.log(1, args)
})

o.once('post', (...args) => {
  console.log('once', args)
})

const fn = (...args) => {
  console.log(2, args)
}
o.on('post', fn)

// o.off('post', fn)
o.emit('post', 1, false, {name: '张三'})
o.emit('post', 1, false, {name: '张三'})

```
## 柯里化 反柯里化
```js
// 柯里化
const currying = function (fn) {
  let arg = []
  return function() {
    [].push.apply(arg, arguments)
    return fn.apply(this, arg)
  }
}

cost = currying(cost)
console.log(cost(100))
console.log(cost(200))
console.log(cost(300))


// console.log(monthlyCost)
// console.log(cost())

// 反柯里化
Function.prototype.uncurrying = function() {
  return Function.prototype.call.bind(this)
}

const push = [].push.uncurrying()
push(obj, 'ddd', 'fff')
```
## PromiseAll
```js
Promise.myPromiseAll = function(promises) {
  if (!Array.isArray(promises)) {
    throw new Error('it is not a array')
  }

  let pResult = []
  let pCount = 0
  return new Promise((resolve, reject) => {
    for (let i = 0; i < promises.length; i++) {
      Promise.resolve(promises[i]).then(pValue => {
        pCount++
        pResult[i] = pValue
        if (pCount === promises.length) {
          resolve(pResult)
        }
      }, (err) => {
        return reject(err)
      })
      
    }
  })
}

let promise1 = new Promise(function(resolve) {
  resolve(1);
});
let promise2 = new Promise(function(resolve) {
  resolve(2);
});
let promise3 = new Promise(function(resolve) {
  resolve(3);
});

let promiseAll = Promise.myPromiseAll([promise1, promise2, promise3]);
promiseAll.then(res => {
  console.log(res)
})

```

