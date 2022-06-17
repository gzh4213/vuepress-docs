# 基础知识点

## 数据类型

### 基本数据类型
* undefined
* null
* number
* string
* boolean
* Symbol
表示独一无二的值，这个类型的出现应该是为了解决可能出现的全局变量冲突的问题
* BigInt
表示任意精度格式的整数，使用BigInt可以安全的存储和操作大整数，即使这个数已经超出了Number能够表示的安全证书范围

````js
// 获取Symbol声明的属性名
let s = Object.getOwnPropertySymbols(obj)

let m = Reflect.ownKeys(obj)
````

* Set
无重复值的有序列表

* Map
键值对的有序列表

### 引用类型
* array
* object

## 标准内置对象

### 原始值
* undefined
* null
* number
* string
* boolean

### 引用值
* object

### 包装对象
* Number
* String
* Boolean

### 构造函数
* Object
* Function
* Date
* Error
* RegExp
* Array
* Math
* JSON
* Arguments

## 全局对象

## 宿主对象
* window
* history
* navigetor
* document


## 闭包
函数的执行，导致函数被定义

闭包是指有权访问另一个 函数作用域中变量的函数
