

# 数组

## 1.已知有序数组，返回和位目标值的数字

```js
// var arr=[1,2,3,4,5]; var target=6; //返回 [2,4]
function sum(arr, target){
 var left =0;
 var right = arr.length-1;
 while(left<right){
  let sum = arr[left]+arr[right];
  if(sum===target){
   return [arr[left], arr[right]]
  }else(sum>target){
   right--;
  }else{
   left++;
  }
 }
}
```

## 2.算法反转数组，每个位置的首字母大小写顺序保留；
['Tom', 'jame', 'david', 'Adam', 'alex'] =>  ['Alex',''adam','david','Jame','tom']