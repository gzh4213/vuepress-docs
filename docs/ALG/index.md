# 理论

## 如何表示复杂度
如何表示算法复杂度，具体来讲就是代码执行的时间、执行消耗的存储空间。例如：

```js
function cal(n) {
    let sum = 0; // 1 unit_time
    let i = 0; // 1 unit_time
    for(; i <= n; i++) { // n unit_time
        sum += i; // n unit_time
    }
    return sum
}
```

从 CPU 的角度看，每段代码不过是读写数据或操作数据，尽管每次操作 CPU 执行的个数、执行的时间都不同，但我们粗咯把每次执行的时间都一致，称为 unit_time 。

所以上述代码总共执行 (2n+2)*unit_time 时间，即：T(n)=(2n+2)*unit_time ，所以，我们可以写成：

```js
T(n) = O(f(n))
```

其中：

* n：表示数据规模的大小
* f(n)：表示每行代码执行的次数总和
* O：表示代码的执行时间 T(n) 与 f(n) 表达式成正比
* 
当 n 很大时，例如 10000，甚至更大，`T(n) = O(f(n))` 可以表示为 `T(n) = O(n)` 。

这就是**大 O 时间复杂度表示法**。**大 O 时间复杂度实际上并不具体表示代码真正的执行时间，而是表示代码执行时间随数据规模增长的变化趋势**，所以，也叫作**渐进时间复杂度（asymptotic time complexity）**，简称时间复杂度。

## 时间复杂度
<!-- 用大O符号表示 （Big O notation）

执行当前算法所‘花费的时间’

在写代码的过程中，就可以大概知道代码运行的快与慢

用 O表示，出自《解析数论》

O(1),O(n),O(n^2),O(logn),,, -->
时间复杂度表示算法的执行时间与数据规模之间的增长关系

当 n 无限大时，时间复杂度 `T(n)` 受 n 的最高数量级影响最大，与`f(n)` 中的常量、低阶、系数关系就不那么大了。所以我们分析代码的时间复杂度时，仅仅关注代码执行次数最多的那段就可以了。



### O(1)
不受到某个变量的影响

示例
```js
if (i === 1)

a = 1 result = 3 + 4 result = n * 2 result = 10000 * 10000

array.push('a')  array.pop()

map.set(1,1) map.get(1,1)

```
在计算复杂度的时候，O(1)一般会被忽略。但也有时间复杂度为O(1)的题

### O(n)

for循环， while循环（不使用二分搜索）
```js
for(let i = 0; i < n; i++)

let i = 0; while(i<n)

let a = 0
for(let i = 0; i < n; i++) {
  a += i
}

```

### O(n^2)

嵌套循环 for while

```js
for(let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    a += i
  }
}

```

## 空间复杂度
空间复杂度表示算法的存储空间与数据规模之间的增长关系

<!-- 执行当前算法需要占用多少内存空间 -->

表示：O(1),O(n),O(n^2),,,

## 栈
后进先出

## 队列
先进先出

## 链表和数组
数组随机访问 O(1)
数组新增元素 复杂度 O(n)

链表随机访问复杂度O(n)
链表删除插入元素 复杂度 O(1)

### 链表实现
```js
class Node {
  constructor(val) {
    this.val = val
    this.next = null
  }
}
class LinkNodeList {
  constructor() {
    this.head = null
    this.length = 0
  }
  append(val) {
    let node = new Node(val)
    let p = this.head
    if (this.head) {
      // 找到链表的最后一个节点， 把这个节点的.next属性赋值给node
      while(p.next) {
        p = p.next
      }
      p.next = node
    } else {
      // 如果没有head节点，链表是空的， 把要创建的节点，赋值给head
      this.head = node
    }
    this.length++
  }

  print () {
    let p = this.head
    let ret = ''
    if (this.head) {
      do {
        ret += (p.val + '=>')
        p = p.next
      } while (p.next)
      ret += p.val
      console.log(ret)
    } else {
      console.log('empty')
    }
  }
}

const linkList = new LinkNodeList()

linkList.append(1)
linkList.append(2)
linkList.append(3)
linkList.append(4)
linkList.print()
console.log(linkList.length);

```