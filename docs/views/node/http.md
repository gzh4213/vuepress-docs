# http

## 创建http服务
```js
// 1.导入http模块
const http = require('http')

// 2.创建服务对象
const server = http.createServer((request, response) => {
  // 获取请求方法
  console.log(request.method)
  // 获取请求url
  console.log(request.url)
  // 获取http协议版本号
  console.log(request.httpVersion)
  // 获取请求头
  console.log(request.headers)
  // 设置响应体
  response.end('hello node')
})

// 3.监听端口
server.listen(9000, () => {
  console.log('服务已启动。')
})
```

## request.method
获取请求方法

## request.url
获取请求url，只包含路径和查询字符串

## request.httpVersion
获取http协议版本号

## request.headers
获取请求头

## 获取请求体

```js
let body = ''
request.on('data', chunk => {
  body += chunk
})

request.on('end', () => {
  console.log('body:', body)

  response.end('hello')
})


```

## url库

```js
// 提取url中的路径和查询字符串
const {
  pathName,
  query
} = url.parse(urlString, true)

```

## response.statusCode
设置响应状态码

## response.statusMessage
设置响应状态描述

## response.setHeader(name, value)
设置响应头

```js
response.setHeader('content-type', 'text/html;charset=utf-8')
```

## response.write/response.end
设置响应体

* 通常使用`write`设置响应体后，`end`中不再设置响应体
* `write`可多次调用
* `end`只可调用一次，且必须设置