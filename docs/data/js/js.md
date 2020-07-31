# 基础知识

## 数组
介绍数组的一些常见函数，以及在实战开发过程中能更好操作数组的lodash包

### push()
说明：向数组的末尾添加一个或多个元素，并返回新的长度

### unshift()
说明：将参数添加到原数组开头，并返回数组的长度

### pop()
说明：删除数组末尾一个或多个元素，并返回被删除的元素

### splice()
说明： 当splice传递两个参数的时候，参数1:开始删除的下标位置,参数2:删除数组元素的个数，返回新的数组。当splice传递三个参数的时候，参数1:开始删除的下表位置,参数2:删除数组元素的个数，参数3:向数组添加的新元素。注意数组下标0开始。

### _.last()
说明：获取数组最后一个元素， 不会改变原始数组

### reverse()
说明： 颠倒数组，返回新的数组。lodash提供的 _.reverse

### join
说明:用于把数组中的所有元素放入一个字符串。元素是通过指定的分隔符进行分隔的。返回一个字符串 代码

### contact
说明：用于连接两个或多个数组,并返回一个新数组，新数组是将参数添加到原数组中构成

### 数组去重：Set、_.uniq()
ES6 新增了Set这一数据结构 类似数组 但是Set成员具有唯一性，基于唯一性适合做数组去重
```
let array=['数字','花朵','数字','地球','人类','头发','眼睛','细胞'];
console.log(...(new Set(array)))
```
lodash提供的函数 _uniq

### 数组求和： _sum
lodash中的函数 _.sum

### 获取数组中指定键值对的值组成数组
lodash中的函数 _map
说明：例如这样一个包含对象的数组`[{id:1,name:'koala'},{id:2,name:'koala1'}]`,想拿到数组对象中id的数据组成一个数组。map的参数1:原型数组，参数2对象中的某一个键值对
代码：
```
let array=[{id:1,name:'koala'},{id:2,name:'koala1'}];
let result=_map(array,'id');
//[1,2]
```

### 获取数组中某个值的角标
返回遇到的第一个符合的值的下标值
indexOf: 

lodash中的函数**_.findIndex** 说明:对于一个数组，里面每个值是对象的时候，这个函数，可以不完全判断对象一定是相同的。 代码:
```
var users = [
    { 'user': 'barney',  'active': false ,'role':1},
    { 'user': 'fred',    'active': false ,'role':2},
    { 'user': 'fred', 'active': true ,'role':3}
  ];

console.log(  _.findIndex(users, { 'user': 'fred', 'role': 3 }));// 输出2
```

### 数组包含值判断

* indexOf
说明:返回对应元素下标，在上面已经详细介绍过。
* includes
说明:返回的直接是true/false，同时对NaN找不到的问题也得到解决。效率应该会比indexOf高一些

### 把一个字符串分割成字符串数组
split
说明：split函数两个参数，参数1:字符串或正则表达式，从该参数指定的地方分割 (必须)，参数2:可选。该参数可指定返回的数组的最大长度。如果设置了该参数，返回的子串不会多于这个参数指定的数组。如果没有设置该参数，整个字符串都会被分割，不考虑它的长度

## 一道面试题:
> 给定任意非负整数，反复累加各位数字直到结果为个位数为止。例如给定非负整数912，第一次累加9+1+2 = 12, 第二次累加1+2 = 3, 3为个位数，循 环终止返回3。请编程实现。
```
function add(num){
    if(isNaN(num)) return;
    if(num<10) return num
    const res=num.toString().split('').reduce((sum,value)=>{
        return sum+Number(value)
    },0)
    return add(res);
}
add(345);
3

```