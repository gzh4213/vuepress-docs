# 理论

## 时间复杂度
用大O符号表示 （Big O notation）

执行当前算法所‘花费的时间’

在写代码的过程中，就可以大概知道代码运行的快与慢

用 O表示，出自《解析数论》

O(1),O(n),O(n^2),O(logn),,,

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
执行当前算法需要占用多少内存空间

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