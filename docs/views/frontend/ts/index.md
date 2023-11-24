# TS
[TypeScript 入门教程](https://ts.xcatliu.com/)

TS是JS的超集，所以JS基础的类型都包含在内

## 安装
```
npm install typescript -g

// 运行
tsc <filename>
```

### 直接执行ts文件
```
npm i @types/node -D
npm i ts-node -g 
```

## 使用

### 基础类型
```js
// 字符串
let str:string = '123'

let str1:string = `web ${str}`

console.log(str1)

// number
// const num:number = 123
// const num:number = NaN
// const num:number = Infinity
const num:number = 0x342344

// 布尔
// const b:boolean = false
const b:Boolean = new Boolean(1)

// 空值
let u:void = undefined
let n:void = null

// 函数没有返回值可以设置为void类型
function fnVoid ():void {
  console.log(123)
  // 返回空或者不写
  return
}

fnVoid()

// null undefined
let nl:null = null
let uf:undefined = undefined

// void 类型不可以赋值给其他类型
// let v:void = undefined
// let str2:string = 'str'

// str2 = v

```

### 任意类型
```js
// any 可以赋值任意类型
let anys:any = '我叫小曼'

anys = 18
anys = true


// unknown
let unknow:unknown = {a: 123}
// 获取不到.a属性和方法， unknown比any更安全
// console.log(unknow.a)


// unknown类型只能赋给自身和any类型，只能当父类型使用
// let str:unknown = '123'
// let str1:string = '234'
// str1 = str
```

### 接口和对象类型
```js
// 接口和对象类型
// 接口定义对象

// 定义接口, 如果定义接口名相同，会合并处理
interface A {
  name: String
}

interface A {
  age: Number,
  // 可选操作符，属性可有可无
  gender?: string,
  // 对象中可能存在任意的其他属性
  [propName: string]: any,
  // 只读属性
  readonly readonlyProp: string,
  // 定义函数
  cb(): number
}

// 接口继承
interface B extends A {
  b: string
}

// let b:B = {
//   b: 'ddd'
// }


// 声明对象
let obj:A = {
  name: '章三',
  age: 18,
  abc: 333,
  readonlyProp: '1223',
  cb: () => {
    return 123
  }
}

// 只读属性，无法重新赋值
// obj.readonlyProp = '123'
console.log(obj.readonlyProp)
```

### 数组类型
```js
// 数组类型

let arr:string[] = ['1','2','3']
let arr1:number[] = [1,2,3,]
let arr2:boolean[] = [true, false]
let arr3:any[] = [true, 1, '2']

// 通过泛型定义数组
let arr4:Array<number> = [1,2,3]
let arr5:Array<string> = ['1','2','3']
let arr6:Array<boolean> = [true, false]

// 二维数组定义
let arr7:number[][] = [[1,2,3],[4,5,6],[7,8,9]]
// 泛型
let arr8:Array<Array<number>> = [[1,2,3],[4,5,6],[7,8,9]]

//其中 IArguments 是 TypeScript 中定义好了的类型，它实际上就是：
// interface IArguments {
//   [index: number]: any;
//   length: number;
//   callee: Function;
// }

function Arr(...args: any): void {
  console.log(args)
  let arr:IArguments = arguments
}

Arr(4,5,6)

interface ArrNumber {
  [index: number]: number
}

let arr9: ArrNumber = [1, 2, 3]

```

### 函数
```js
// 函数扩展 

// const fn = function(name: string, age?: number):string {
//   return name + age
// }
// let a = fn('张三')

interface User {
  name: string,
  age: number
}

const fn = function(user: User): User {
  return user
}

let a = fn({
  name: '张三',
  age: 18
})

console.log(a)

// 函数重载: 重载是方法名字相同，而参数不同，返回类型可以相同也可以不同。如果参数类型相同，则操作函数参数类型应设置为any。参数数量不同你可以将不同的参数设置为可选
function fn1(params: number): void 
function fn1(params: string, params2: number): void 
function fn1(params: any, params2?: any): void {
  console.log(params)
  console.log(params2)
}

fn1('1',2)

```

### 类型断言｜联合类型 ｜ 交叉类型
```js
// 类型断言｜联合类型 ｜ 交叉类型
let phone: number | string = 131223334

// 联合类型
let fn = function (type: number | boolean): boolean {
  return !!type
}

// 交叉类型
interface People {
  name: string,
  age: number
}

interface Man {
  sex: number
}

const xiaoman = (man: People & Man):void => {
  // console.log(man)
}

xiaoman({
  name: '小满',
  age: 99,
  sex: 1
})

// 类型断言
let fn1 = function(num: number | string):void {
  console.log((num as string).length)
}

fn1('123')

interface A {
  run: string
}

interface B {
  build: string
}

let fn2 = (type: A | B): void => {
  console.log((<A>type).run)
}

fn2({
  build: '123'
})

const fn3 = (type: any): boolean => {
  return type as boolean
}
console.log(fn3(1))

```

### 内置对象
```js
// 内置对象
const regexp: RegExp = /\w\d\s/
const date: Date = new Date()
const date1: number = new Date().getTime()
const error: Error = new Error('dddd')

// DOM、BOM

// const list:NodeList = document.querySelectorAll('#list li')
// const body: HTMLElement = document.body
// const div:HTMLDivElement = document.querySelector('div')

// document.body.addEventListener('click', (e: MouseEvent) => {
//   console.log(e)
// })

function promise(): Promise<number> {
  return new Promise<number>((resolve, reject) => {
    resolve(1)
  })
}

promise().then(res => {
  console.log(res)
})

//dom元素的映射表
// interface HTMLElementTagNameMap {
//   "a": HTMLAnchorElement;
//   "abbr": HTMLElement;
//   "address": HTMLElement;
//   "applet": HTMLAppletElement;
//   "area": HTMLAreaElement;
//   "article": HTMLElement;
//   "aside": HTMLElement;
//   "audio": HTMLAudioElement;
//   "b": HTMLElement;
//   "base": HTMLBaseElement;
//   "bdi": HTMLElement;
//   "bdo": HTMLElement;
//   "blockquote": HTMLQuoteElement;
//   "body": HTMLBodyElement;
//   "br": HTMLBRElement;
//   "button": HTMLButtonElement;
//   "canvas": HTMLCanvasElement;
//   "caption": HTMLTableCaptionElement;
//   "cite": HTMLElement;
//   "code": HTMLElement;
//   "col": HTMLTableColElement;
//   "colgroup": HTMLTableColElement;
//   "data": HTMLDataElement;
//   "datalist": HTMLDataListElement;
//   "dd": HTMLElement;
//   "del": HTMLModElement;
//   "details": HTMLDetailsElement;
//   "dfn": HTMLElement;
//   "dialog": HTMLDialogElement;
//   "dir": HTMLDirectoryElement;
//   "div": HTMLDivElement;
//   "dl": HTMLDListElement;
//   "dt": HTMLElement;
//   "em": HTMLElement;
//   "embed": HTMLEmbedElement;
//   "fieldset": HTMLFieldSetElement;
//   "figcaption": HTMLElement;
//   "figure": HTMLElement;
//   "font": HTMLFontElement;
//   "footer": HTMLElement;
//   "form": HTMLFormElement;
//   "frame": HTMLFrameElement;
//   "frameset": HTMLFrameSetElement;
//   "h1": HTMLHeadingElement;
//   "h2": HTMLHeadingElement;
//   "h3": HTMLHeadingElement;
//   "h4": HTMLHeadingElement;
//   "h5": HTMLHeadingElement;
//   "h6": HTMLHeadingElement;
//   "head": HTMLHeadElement;
//   "header": HTMLElement;
//   "hgroup": HTMLElement;
//   "hr": HTMLHRElement;
//   "html": HTMLHtmlElement;
//   "i": HTMLElement;
//   "iframe": HTMLIFrameElement;
//   "img": HTMLImageElement;
//   "input": HTMLInputElement;
//   "ins": HTMLModElement;
//   "kbd": HTMLElement;
//   "label": HTMLLabelElement;
//   "legend": HTMLLegendElement;
//   "li": HTMLLIElement;
//   "link": HTMLLinkElement;
//   "main": HTMLElement;
//   "map": HTMLMapElement;
//   "mark": HTMLElement;
//   "marquee": HTMLMarqueeElement;
//   "menu": HTMLMenuElement;
//   "meta": HTMLMetaElement;
//   "meter": HTMLMeterElement;
//   "nav": HTMLElement;
//   "noscript": HTMLElement;
//   "object": HTMLObjectElement;
//   "ol": HTMLOListElement;
//   "optgroup": HTMLOptGroupElement;
//   "option": HTMLOptionElement;
//   "output": HTMLOutputElement;
//   "p": HTMLParagraphElement;
//   "param": HTMLParamElement;
//   "picture": HTMLPictureElement;
//   "pre": HTMLPreElement;
//   "progress": HTMLProgressElement;
//   "q": HTMLQuoteElement;
//   "rp": HTMLElement;
//   "rt": HTMLElement;
//   "ruby": HTMLElement;
//   "s": HTMLElement;
//   "samp": HTMLElement;
//   "script": HTMLScriptElement;
//   "section": HTMLElement;
//   "select": HTMLSelectElement;
//   "slot": HTMLSlotElement;
//   "small": HTMLElement;
//   "source": HTMLSourceElement;
//   "span": HTMLSpanElement;
//   "strong": HTMLElement;
//   "style": HTMLStyleElement;
//   "sub": HTMLElement;
//   "summary": HTMLElement;
//   "sup": HTMLElement;
//   "table": HTMLTableElement;
//   "tbody": HTMLTableSectionElement;
//   "td": HTMLTableDataCellElement;
//   "template": HTMLTemplateElement;
//   "textarea": HTMLTextAreaElement;
//   "tfoot": HTMLTableSectionElement;
//   "th": HTMLTableHeaderCellElement;
//   "thead": HTMLTableSectionElement;
//   "time": HTMLTimeElement;
//   "title": HTMLTitleElement;
//   "tr": HTMLTableRowElement;
//   "track": HTMLTrackElement;
//   "u": HTMLElement;
//   "ul": HTMLUListElement;
//   "var": HTMLElement;
//   "video": HTMLVideoElement;
//   "wbr": HTMLElement;
// }

```

### Class类
```js
// Class类

// 定义属性
class Person {
  public name: string
  private age: number
  protected sub: boolean
  static aaa: string = '123'
  constructor(name: string, age:number, sub:boolean) {
    this.name = name
    this.age = age
    this.sub = sub
    // this.run()
    Person.run()
  }
  static run () {
    // 静态函数内部不能访问 构造函数实例的属性
    return '789'
  }
}

class Man extends Person {
  constructor() {
    super('xiaoman',22,false)
    // 可以在子类中访问 protected 关键字属性
    console.log(this.sub)
  }
}

let p = new Person('xiaoman',22,false)

Person.aaa
Person.run()

// public 内部外部都能访问,默认值
// private 代表定义的变量私有的只能在内部访问 不能在外部访问
// protected 代表定义的变量私有的只能在内部和继承的子类中访问 不能在外部访问
// static 静态属性和静态方法

// 通过接口约束类
interface Person1 {
  run(type: boolean) : boolean
}

interface H {
  set(): void
}

class A {
  params: string
  constructor(params) {
    this.params = params
  }
}

class Man1 extends A implements Person1,H {
  run(type: boolean): boolean {
    return type
  }
  set() {

  }
}
```

### 抽象类
```js
// 抽象类 不能被实例化
abstract class A {
  name: string
  constructor(name: string) {
    this.name = name
  }
  setName(name: string) {
    this.name = name
  }
  abstract getName(): string
}
// let a = new A()

class B extends A {
  constructor() {
    super('xiaoman')
  }
  getName(): string {
    return this.name
  }
}

let b = new B()
b.setName('xiaoming')
console.log(b.getName())

```

### 元组类型
```js

// 如果需要一个固定大小的不同类型值的集合，我们需要使用元组。 
// 元组类型 ： 数组的变种，
// 元组（Tuple）是固定数量的不同类型的元素的组合。
let arr: [string, number] = ['xiaoming', 22]
arr[0].length
// arr[1].length

// 越界元素
// arr.push(222, 'dddd', false)
// console.log(arr)

let excel:[string, string, number][] = [
  ['title', 'name', 111]
]
console.log(excel)

```

### 枚举类型
```js
// 枚举类型

// 数字枚举
// enum Color {
//   red,
//   green,
//   blue
// }

// 增长枚举
// enum Color {
//   red = 1,
//   green = 5,
//   blue = 6
// }

// console.log(Color.red)
// console.log(Color.green)
// console.log(Color.blue)


// 字符串枚举
// enum Color2 {
//   red = 'red',
//   green = 'green',
//   blue = 'blue'
// }

// console.log(Color2.red)
// console.log(Color2.green)
// console.log(Color2.blue)

// 异构枚举
enum Color3 {
  yes = 1,
  no = 'no'
}

// 接口枚举
// interface A {
//   red: Color3.yes
// }

// let obj:A = {
//   red: Color3.yes
// }

// const枚举
// 编译结果不同，会编译成常量
// const enum Types {
//   success,
//   fail
// }

// let code:number = 0
// if (code === Types.success) {
// }

// 反向映射： 数字枚举有效
enum Types1 {
  success
}

let success:number = Types1.success
let key = Types1[success]
console.log(success,key)

```

### 类型推论 ｜ 类型别名
```js
// 类型推论 ｜ 类型别名

// 默认推论为string类型，不能赋值其他类型
// let str = '123'
// str = 123

// 默认推论为any类型
let a
a = []
a = {}
a = true

// 类型别名
// type s = string | number
// let str:s = 'xiaoming'
// let num:s = 123
// let bool:s = true

// 函数式类型别名
// type cb = () => string
// let fn:cb = () => 'xiaoming'
// console.log(fn())

// 字面量类型的别名
// type T = 'off' | 'on'
// let str:T = 'ddd'

```

### never类型
```js
// never类型 用来表示不应该存在的状态

// bbb被推论成never类型，不可能存在
type bbb = string & number

// function error(msg: string):never {
//   throw new Error(msg)
// }

// function loop():never {
//   while(true) {

//   }
// }

interface A {
  type: '保安'
}

interface B {
  type: '草莓'
}

// interface C {
//   type: 'caicai'
// }

type ALL = A | B
function type(val:ALL) {
  switch(val.type) {
    case '保安':
      break
    case '草莓':
      break
    default:
      const check:never = val
      break
  }
}

```

### symbol类型
```js
// symbol类型
// let s:symbol = Symbol('xiaoming')
// let s1:symbol = Symbol('xiaoming')
// let num:symbol = Symbol(123)
// console.log(s === s1)
// console.log(s,num)

// let obj = {
//   [num]: 'value',
//   [s]: '草莓',
//   name: 'xiaoming',
//   age: 18
// }

// console.log(obj[num])

// for (let key in obj) {
//   // symbol类型的key不会被遍历
//   console.log(key)
// }

// console.log(Object.keys(obj))
// console.log(Object.getOwnPropertyNames(obj))
// console.log(JSON.stringify(obj))
// console.log(Object.getOwnPropertySymbols(obj))
// console.log(Reflect.ownKeys(obj))


// Symbol.iterator 迭代器 和生成器 for of
let arr:Array<number> = [4,5,6]
// let it:Iterator<number> = arr[Symbol.iterator]()

// console.log(it.next())
// console.log(it.next())
// console.log(it.next())
// console.log(it.next())

let set:Set<number> = new Set([1,2,3])

type mapKeys = string | number
let map:Map<mapKeys,mapKeys> = new Map()
map.set('1','xiaoming')
map.set('2','zhangsan')

// 迭代器
// function gen(erg:any) {
//   let it:Iterator<any> = erg[Symbol.iterator]()
//   let next:any = {
//     done: false
//   }
//   while(!next.done) {
//     next = it.next()
//     if(!next.done) {
//       console.log(next.value)
//     }
//   }
// }

// gen(arr)
// gen(set)
// gen(map)

// 生成器
for (let item of arr) {
  console.log(item)
}

// for of 和 for in的区别
// for of 是迭代器的语法糖，可以直接遍历出有序集合的值
// for in 遍历出的是key

```

### 泛型 ｜ 泛型约束 ｜ 泛型类
```js
// 泛型 ｜ 泛型约束 ｜ 泛型类 语法为函数名字后面跟一个<参数名> 参数名可以随便写 例如写T，当我们使用这个函数的时候把参数的类型穿进去就可以了

// 函数式泛型

function num(a:number, b: number): Array<number> {
  return [a,b]
}
num(1,2)

function str(a:string, b: string): Array<string> {
  return [a,b]
}
str('1','2')

// 泛型
function add<T>(a:T, b:T):Array<T> {
  return [a,b]
}

add<number>(1,2)
add<string>('1', '2')
// 简写
add(1,2)
add('1', '2')

function sub<T,U> (a: T, b: U): Array<T | U> {
  let arr:Array<T | U> = [a,b]
  return arr
}

sub<number, boolean> (1,false)
sub(1,false)

// 泛型约束
interface Len {
  length: number
}
function getLength<T extends Len> (arg: T) {
  return arg.length
}

// 传入值必须有length属性
getLength('d')

// 使用keyof约束对象
function prop<T, K extends keyof T> (obj: T, key: K) {
  return obj[key]
}

let o = {
  a: 1,
  b: 2
}

prop(o, 'a')
// prop(o, 'c')

// 泛型类
class Sub<T> {
  attr:T[] = []
  add(a: T): T[] {
    return [a]
  }
}

let s = new Sub<number>()
s.attr = [1,2,3]
s.add(123)

let s1 = new Sub<string>()
s1.attr = ['1','2','3']
s1.add('123')
```

### 命名空间

### Mixins混入

```ts
// 对象混入
//可以使用es6的Object.assign 合并多个对象
// 此时 people 会被推断成一个交差类型 Name & Age & sex;
interface Name {
    name: string
}
interface Age {
    age: number
}
interface Sex {
    sex: number
}
 
let people1: Name = { name: "小满" }
let people2: Age = { age: 20 }
let people3: Sex = { sex: 1 }
 
const people = Object.assign(people1,people2,people3)
```
### Partial & Pick
```js
type Person = {
  name: string,
  age: number,
  text: string
}

// Partial
// 将定义的类型的属性都变成可选属性
type p = Partial<Person>
// 源码
type Par<T> = {
  [P in keyof T]: T[P]
}

// Pick
// 将定义的类型筛选需要的属性
type p1 = Pick<Person, 'age' | 'name'>
// 源码
type Pick1<T, K extends keyof T> = {
  [P in K]: T[P];
};

```

### Record & Readonly
```js
// Record & Readonly

type Person = {
  name: string,
  age: number,
  text: string
}

// Readonly
type man = Readonly<Person>
// 源码
type Readonly1<T> = {
  readonly [P in keyof T]: T[P];
};

// Record 同时约束对象的key 和value 的赋值
type K = 1 | 2 | 3

type B = Record<K, Person>

let obj:B = {
  1: {name: '张三', age: 18, text: '哈哈'},
  2: {name: '张三', age: 18, text: '哈哈'},
  3: {name: '张三', age: 18, text: '哈哈'},
}
// 源码
type Record1<K extends keyof any, T> = {
  [P in K]: T;
};

```

### infer
充当占位符



## 发布订阅模式
```ts
// 发布订阅模式
interface MyEvent {
  on:(name: string, fn: Function) => void,
  emit:(name: string, ...args: Array<any>) => void,
  off:(name: string, fn: Function) => void,
  once:(name: string, fn: Function) => void,
}

interface List {
  [key: string] : Array<Function>
}

class Dispatch implements MyEvent {
  list: List
  constructor() {
    this.list = {}
  }
  on (name: string, fn: Function) {
    const callback = this.list[name] || []
    callback.push(fn)
    this.list[name] = callback
    // console.log(this.list)
  }

  emit (name: string, ...args: Array<any>) {
    let eventName = this.list[name]
    if(eventName) {
      eventName.forEach(fn => {
        fn.apply(this, args)
      })
    } else {
      console.error(`名称错误 ${name}`)
    }
  }

  off (name: string, fn: Function) {
    let eventName = this.list[name]
    if (eventName && fn) {
      let index = eventName.findIndex(fns => fns === fn)
      eventName.splice(index, 1)
      // console.log(eventName)
    } else {
      console.error(`名称错误 ${name}`)
    }
  }

  once (name: string, fn: Function) {
    let de = (...args: Array<any>) => {
      fn.apply(this, args)
      this.off(name, de)
    }
    this.on(name, de)
  }
}

const o = new Dispatch()
o.on('post', (...args:Array<any>) => {
  console.log(1, args)
})

o.once('post', (...args:Array<any>) => {
  console.log('once', args)
})

// const fn = (...args:Array<any>) => {
//   console.log(2, args)
// }
// o.on('post', fn)

// o.off('post', fn)
o.emit('post', 1, false, {name: '张三'})
o.emit('post', 1, false, {name: '张三'})

```

## proxy
```js
type Person = {
  name: string,
  age: number,
  text: string
}

const proxy = (object: any, key: any) => {
  return new Proxy(object, {
    get (target, prop, receiver) {
      console.log('==========>get', prop)
      return Reflect.get(target, prop, receiver)
    },
    set (target, prop, value, receiver) {
      console.log('==========>set', prop)
      return Reflect.set(target, prop, value, receiver)
    }
  })
}


const logAccess = <T>(object: T, key: keyof T): T => {
  return proxy(object, key)
}

let man: Person = logAccess({
  name: '张三',
  age: 18,
  text: '生生世世'
}, 'name')

let man2 = logAccess({
  name: '张三',
  id: 1
}, 'id')

man.age = 30
console.log(man)
```