# MongoDB

Mongodb中有三个重要概念需要掌握

* 数据库(database) 数据库是一个数据仓库，数据库服务下可以创建很多数据库，数据库中可以存放很多集合
* 集合(collection) 集合类似于JS中的数组，在集合中可以存放很多文档
* 文档(document) 文档是数据库中的最小单位，类似于JS中的对象

集合 = 表
文档 = 记录

## 安装
[官方安装地址](https://www.mongodb.com/docs/v5.0/tutorial/install-mongodb-on-os-x/)

1. 安装相关工具
   `brew tap mongodb/brew`

2. 更新homebrew
   `brew update`

3. 安装MongoDB community
  `brew install mongodb-community@5.0`

## 运行
  `brew services start mongodb-community@5.0`

## 停止
  `brew services stop mongodb-community@5.0`

## 连接
  `mongosh`

## 数据库命令

### 显示所有的数据库
`show dbs`

### 切换到指定的数据库，如果数据库不存在会自动创建数据库
`use 数据库名`

### 显示当前所在的数据库
`db`

### 删除当前的数据库
`use 库名`

`db.dropDatabase()`

## 集合命令

### 创建集合
`db.createCollection('集合名字')`

### 显示当前数据库中的所有集合
`show collections`

### 删除某个集合
`db.集合名.drop()`

### 重命名集合
`db.集合名.renameCollection('rename')`

## 文档命令

### 插入文档
`db.集合名.insert(文档对象)`

### 查询文档
`db.集合名.find(查询条件)`

### 更新文档
`db.集合名.update(查询条件，新的文档)`

`db.集合名.update({name:'张三'}, {$set: {age: 19}})`

### 删除文档
`db.集合名.remove(查询条件)`

## Mongoose
是一个对象文档模型库，官网：http://www.mongoosejs.net/

方便使用代码操作mongodb数据库

<!-- ### 文档类型

[SchemeTypes](http://www.mongoosejs.net/docs/schematypes.html) -->

## 图形化工具

### Robo 3T

[下载地址](https://robomongo.org/)

### Navicat

[下载地址](https://www.navicat.com.cn/)