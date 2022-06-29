# 重写方法

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