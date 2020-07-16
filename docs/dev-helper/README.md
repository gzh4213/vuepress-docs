# Markdown 拓展

## Emoji

**输入**
```
:tada: :100:
```

**输出**

:tada: :100:

## 目录

**输入**
```
[[toc]]
```

**输出**

[[toc]]

## 自定义容器 <Badge text="默认主题"/>

**输入**
```md
::: tip
这是一个提示
:::

::: warning
这是一个警告
:::

::: danger
这是一个危险警告
:::

::: details
这是一个详情块，在 IE / Edge 中不生效
:::
```

**输出**
::: tip
这是一个提示
:::

::: warning
这是一个警告
:::

::: danger
这是一个危险警告
:::

::: details
这是一个详情块，在 IE / Edge 中不生效
:::

你也可以自定义块中的标题

````md
::: danger STOP
危险区域，禁止通行
:::

::: details 点击查看代码
```js
console.log('你好，VuePress！')
```
:::
````

::: danger STOP
危险区域，禁止通行
:::

::: details 点击查看代码
```js
console.log('你好，VuePress！')
```
:::

## 代码块中的语法高亮

VuePress 使用了 [Prism](https://prismjs.com/) 来为 markdown 中的代码块实现语法高亮。Prism 支持大量的编程语言，你需要做的只是在代码块的开始倒勾中附加一个有效的语言别名：

**输入**

````
``` js
export default {
  name: 'MyComponent',
  // ...
}
```
````

**输出**

``` js
export default {
  name: 'MyComponent',
  // ...
}
```

**输入**

````
``` html
<ul>
  <li
    v-for="todo in todos"
    :key="todo.id"
  >
    {{ todo.text }}
  </li>
</ul>
```
````

**输出**

``` html
<ul>
  <li
    v-for="todo in todos"
    :key="todo.id"
  >
    {{ todo.text }}
  </li>
</ul>
```

## 代码块中的行高亮

**输入**

````
``` js {4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```
````

**输出**

``` js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```

## 行号

你可以通过配置来为每个代码块显示行号：

``` js
module.exports = {
  markdown: {
    lineNumbers: true
  }
}
```

- 示例:

<picture>
  <source srcset="/line-numbers-desktop.png" media="(min-width: 719px)">
  <img class="line-numbers-desktop-snap" alt="Image">
</picture>

<picture>
  <source srcset="/line-numbers-mobile.gif" media="(max-width: 719px)">
  <img class="line-numbers-mobile-snap" alt="Image">
</picture>

<style>
  @media screen and (min-width:  719px) {
    .line-numbers-mobile-snap {
       display: none;
    }
  }
  @media screen and (max-width:  719px) {
    .line-numbers-desktop-snap {
       display: none;
    }
    .line-numbers-mobile-snap {
      max-width: none!important;
      margin: 0 -1.5rem;
      width: 100vw;
    }
  }
</style>