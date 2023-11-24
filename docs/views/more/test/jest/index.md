# 主流框架
* jasmine
* MOCHA
* Jest

> 优点：新、基础好、速度快、API简单、隔离性好、IDE整合好、多项目运行、导出测试覆盖率

## 环境搭建

# jest

Jest是Facebook的一套开源的JavaScript测试框架，它自动集成了断言、JSDom、覆盖率报告等开发者需要的所有测试工具，是一款几乎零配置的测试框架。

## 断言

## expect
Jest为我们提供了expect函数用来包装被测试的方法并返回一个对象，该对象中包含一系列的匹配器来让我们更方便的进行断言

### 几种常用的Jest断言

* `.not`

``` js
//functions.test.js
import functions  from '../src/functions'

test('sum(2, 2) 不等于 5', () => {
  expect(functions.sum(2, 2)).not.toBe(5);
})
```
.not修饰符允许你测试结果不等于某个值的情况



* `.toEqual()`

``` js
// functions.js
export default {
  getAuthor() {
    return {
      name: 'LITANGHUI',
      age: 24,
    }
  }
}
```

``` js
// functions.test.js
import functions  from '../src/functions';

test('getAuthor()返回的对象深度相等', () => {
  expect(functions.getAuthor()).toEqual(functions.getAuthor());
})

test('getAuthor()返回的对象内存地址不同', () => {
  expect(functions.getAuthor()).not.toBe(functions.getAuthor());
})
```

`.toEqual`匹配器会递归的检查对象所有属性和属性值是否相等，所以如果要进行应用类型的比较时，请使用`.toEqual`匹配器而不是`.toBe`。

* `.toHaveLength`

``` js
// functions.js
export default {
  getIntArray(num) {
    if (!Number.isInteger(num)) {
      throw Error('"getIntArray"只接受整数类型的参数');
    }

    let result = [];
    for (let i = 0, len = num; i < len; i++) {
      result.push(i);
    }
    
    return result;
  }
}

```
```js
// functions.test.js
import functions  from '../src/functions';

test('getIntArray(3)返回的数组长度应该为3', () => {
  expect(functions.getIntArray(3)).toHaveLength(3);
})
```
`.toHaveLength`可以很方便的用来测试字符串和数组类型的长度是否满足预期。


* `.toThrow`
```js
// functions.test.js
import functions  from '../src/functions';

test('getIntArray(3.3)应该抛出错误', () => {
  function getIntArrayWrapFn() {
    functions.getIntArray(3.3);
  }
  expect(getIntArrayWrapFn).toThrow('"getIntArray"只接受整数类型的参数');
})
```
`.toThorw`可能够让我们测试被测试方法是否按照预期抛出异常，但是在使用时需要注意的是：我们必须使用一个函数将将被测试的函数做一个包装，正如上面`getIntArrayWrapFn`所做的那样，否则会因为函数抛出导致该断言失败。

* `.toMatch`
```js
// functions.test.js
import functions  from '../src/functions';

test('getAuthor().name应该包含"li"这个姓氏', () => {
  expect(functions.getAuthor().name).toMatch(/li/i);
})
```
`.toMatch`传入一个正则表达式，它允许我们用来进行字符串类型的正则匹配。

