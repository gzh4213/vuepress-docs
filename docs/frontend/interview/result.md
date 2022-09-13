# 求输出结果

## this指向问题
```js
var num = 10;

var obj = { 
  num: 20
}

obj.fn = (function(num){ 
 this.num = num * 3; 
 num++;               
 return function(n){
  this.num += n ; 
  num++;
  console.log(num) // 输出结果
 }
})(obj.num)

var fn = obj.fn;

fn(5); 

obj.fn(10);

// 最终num和obj.num的值
console.log(num, obj.num)

```

## 宏任务微任务
```js
Promise.resolve().then(()=>{
  console.log(1)
  const timer2= setTimeout(() => {
     console.log(2) 
  }, 0);
}) 
setTimeout(() => {
 console.log(3) 
 Promise.resolve().then(()=>{
     console.log(4)
 })
}, 0); 
console.log(5)

```