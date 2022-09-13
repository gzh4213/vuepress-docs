```js
// 显示创建的数据库
show databases;

// 创建数据库
CREATE SCHEMA `myblog`

// 建表
CREATE TABLE `blogs` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(50) NOT NULL,
  `content` longtext NOT NULL,
  `createtime` bigint NOT NULL,
  `author` varchar(20) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

use myblogs;

show tables;

insert into users (username, `password`, realname) values('lisi','123','李四')

select * from users;
select id, username from users;

select * from users where username='zhangsan' and `password`='123'
select * from users where username like '%zhang%';
select * from users where username like '%zhang%' order by id desc;
```

[mysql忘记密码](https://blog.csdn.net/qq_38085240/article/details/83273815)

