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