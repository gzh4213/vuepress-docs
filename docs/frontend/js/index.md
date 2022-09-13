# 数组

## 稀疏数组

````js
const arr = [1,,3,4,5,]

console.log(arr)  // [1,empty,3,4,5]
console.log(arr[1]) // undefined
````

## 类数组

如 arguments, DOMList, 字符串, 具有length,和固定顺序，但不具有数组的一些方法

````js
let str = '12345'

cosole.log(str[0])
cosole.log(str.length)

// 类数组上，设计修改长度的方法都不可用
str.push(6)
Array.prototype.push.call(str, 6)
console.log(str)
Array.prototype.forEach.call(str, function(item){
  console.log(item)
})
````

## 转字符串方法

### toString
### join

````js
// 可将n维数组扁平化
Array.prototype.toString.call([1,2,3,4])
Array.prototype.toString.call([[1,2],[3,4]])
````

## 堆栈方法

### push
### unshift
* 返回值：数组变化后的最新长度

### pop
### shift
* 返回值： 删除的项目

## 排序方法

### sort
返回排序之后的原数组

### reverse
返回倒序后的原数组

## 拼接方法

### concat

````js
const arr = [1,2]

console.log(arr, arr.concat(3,4))
console.log(arr, arr.concat([3,4]))

````

## 删改方法

### slice
> [ ) 左闭右开
返回新的截取后的数组

````js
// 调用slice方法，将字符串转成数组
let str = '123456'
Array.prototype.slice(str)
````

### splice(start, length, value)
> 截取规则，左闭右开
删除数组指定范围的数组，并返回被删除的数组，会修改原数组
````js
const arr = [1,2,3,4,5]
console.log(arr, arr.splice())
````

## indexOf lastIndexOf

## 静态/构造函数方法

### Array.of()
### Array.from()
### keys()

## fill 填充方法

## 遍历方法

### forEach
### map
### reduce
### reduceRight
### some
### every
### filter

### keys
### values
### entries

