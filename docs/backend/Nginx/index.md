# Nginx

Nginx (engine x) 是一个高性能的HTTP和反向代理web服务器，同时也提供了IMAP/POP3/SMTP服务。Nginx是由伊戈尔·赛索耶夫为俄罗斯访问量第二的Rambler.ru站点（俄文：Рамблер）开发的，第一个公开版本0.1.0发布于2004年10月4日。2011年6月1日，nginx 1.0.4发布。

高并发，大流量：需要面对高并发用户，大流量访问。举个例子，去往迪拜的飞机有200张票，但是有100w人都挤进系统买票，如何让这100w人能够看到票务的实时更新，以及顺利的买到一张票，都是一个网站架构师应该考虑的问题。这也许对于淘宝的“双十一”1000w的一分钟独立访问用户量来说，是个微不足道的数字，但是对于用户的体验以及网站的口碑来说，都是一项不小的挑战

Nginx 是一个安装非常的简单、配置文件非常简洁（还能够支持perl语法）、Bug非常少的服务。Nginx 启动特别容易，并且几乎可以做到7*24不间断运行，即使运行数个月也不需要重新启动。你还能够不间断服务的情况下进行软件版本的升级。

Nginx代码完全用C语言从头写成。官方数据测试表明能够支持高达 50,000 个并发连接数的响应。


## 特性

### 正向代理 反向代理

nginx不仅可以做反向代理，还能用作正向代理来进行上网等功能。如果把局域网外的Internet想象成一个巨大的资源库，则局域网中的客户端要访问Internet，则需要通过代理服务器来访问，这种代理服务就称为正向代理（也就是大家常说的，通过正向代理进行上网功能）

反向代理实际运行方式是代理服务器接受网络上的连接请求。它将请求转发给内部网络上的服务器，并将从服务器上得到的结果返回给网络上请求连接的客户端，此时代理服务器对外就表现为一个服务器。

### 负载均衡（upstream）

* 轮询

轮询方式是Nginx负载默认的方式，顾名思义，所有请求都按照时间顺序分配到不同的服务上，如果服务Down掉，可以自动剔除

* 权重

指定每个服务的权重比例，weight和访问比率成正比，通常用于后端服务机器性能不统一，将性能好的分配权重高来发挥服务器最大性能

### 动静分离

在Web开发中，通常来说，动态资源其实就是指那些后台资源，而静态资源就是指HTML，JavaScript，CSS，img等文件。

一般来说，都需要将动态资源和静态资源分开，将静态资源部署在Nginx上，当一个请求来的时候，如果是静态资源的请求，就直接到nginx配置的静态资源目录下面获取资源，如果是动态资源的请求，nginx利用反向代理的原理，把请求转发给后台应用去处理，从而实现动静分离。

在使用前后端分离之后，可以很大程度的提升静态资源的访问速度，同时在开发过程中也可以让前后端开发并行可以有效的提高开发时间，也可以有效的减少联调时间 。

## 常用命令

```bash
# 查看版本
nginx -v

# 检查配置文件是否有语法错误,可打印出配置文件路径
nginx -t

# nginx 启动目录
whereis nginx

# 启动nginx 直接执行 `nginx` 即可
nginx

# stop 是立即停止
nginx -s stop

# quit 是一个优雅的关闭方式，Nginx在退出前完成已经接受的请求处理
nginx -s quit

# 重载nginx配置文件
nginx -s reload

# 查看nginx进程 `ps -ef` 输出标准格式的linux进程命令 `grep nginx` `grep`命令 是查找， 是一种强大的文本搜索工具 我们这儿是查找nginx
ps -ef | grep nginx
```

## 配置文件

Nginx的主配置文件是nginx.conf，这个配置文件一共由三部分组成，分别为全局块、events块和http块。

在http块中，又包含http全局块、多个server块。

每个server块中，可以包含server全局块和多个location块。在同一配置块中嵌套的配置块，各个之间不存在次序关系

### 全局块
全局块是默认配置文件从开始到events块之间的一部分内容，主要设置一些影响Nginx服务器整体运行的配置指令，因此，这些指令的作用域是Nginx服务器全局。

* user [user] [group]  指定可以运行nginx服务的用户和用户组，只能在全局块配置 user指令在Windows上不生效，如果你制定具体用户和用户组会报警告
* worker_processes nginx进程数量worker_processes 比如设置为2 nginx将会开启一个master进程和2两个worker进程
* pid  logs/nginx.pid 存放pid文件
* error_log  logs/error.log;  全局错误日志类型 debug info warn error 存放地址

### events块
events块涉及的指令主要影响Nginx服务器与用户的网络连接。常用到的设置包括是否开启对多worker process下的网络连接进行序列化，是否允许同时接收多个网络连接，选取哪种事件驱动模型处理连接请求，每个worker process可以同时支持的最大连接数等

* accept_mutex 默认开启-开启之后nginx 的多个worker将会以串行的方式来处理，只会有一个worker将会被唤起，其他的worker继续睡眠，如果不开启将会造成惊群效应多个worker全部唤起不过只有一个Worker能获取新连接，其它的Worker会重新进入休眠状态

* worker_connections 单个进程最大连接数（最大连接数=连接数+进程数）

### http块
http块是Nginx服务器配置中的重要部分，代理、缓存和日志定义等绝大多数的功能和第三方模块的配置都可以放在这个模块中。

* include指令，用于引入其他的配置文件
* default_type 如果Web程序没设置，Nginx也没对应文件的扩展名，就用Nginx 里默认的 default_type定义的处理方式。default_type application/octet-stream; #nginx默认文件类型
* log_format指令，用于定义日志格式，此指令只能在http块中进行配置
* sendfile 简单来说就是启用sendfile()系统调用来替换read()和write()调用，减少系统上下文切换从而提高性能，当 nginx 是静态文件服务器时，能极大提高nginx的性能表现
* keepalive_timeout HTTP 有一个 KeepAlive 模式，它告诉 webserver 在处理完一个请求后保持这个 TCP 连接的打开状态。若接收到来自客户端的其它请求，服务端会利用这个未被关闭的连接，而不需要再建立一个连接。
* gzip 开启Gzip压缩功能， 可以使网站的css、js 、xml、html 文件在传输时进行压缩，提高访问速度, 进而优化Nginx性能

### serve块
每一个http块都可以包含多个server块，而每个server块就相当于一台虚拟主机，它内部可有多台主机联合提供服务，一起对外提供在逻辑上关系密切的一组服务

* listen指令的配置非常灵活，可以单独制定ip，单独指定端口或者同时指定ip和端口
```
listen 127.0.0.1:8000;  #只监听来自127.0.0.1这个IP，请求8000端口的请求
listen 127.0.0.1; #只监听来自127.0.0.1这个IP，请求80端口的请求（不指定端口，默认80）
listen 9999; #监听来自所有IP，请求9999端口的请求
listen *:9999; #和上面效果一样
listen localhost:8000; #和第一种效果一致
```

* server_name nginx 允许一个虚拟主机有一个或多个名字，也可以使用通配符"*"来设置虚拟主机的名字  支持 ip 域名 通配符 正则等
```
server_name  localhost

```

### location块
每个server块中可以包含多个location块。在整个Nginx配置文档中起着重要的作用，而且Nginx服务器在许多功能上的灵活性往往在location指令的配置中体现出来

location 指令可以分为以下 3 类：

* 前缀字符串匹配
* 正则表达式匹配
* 用于内部跳转的命名location

**前缀字符串匹配**
* 精确匹配 =
* 前缀匹配 ^~（立刻停止后续的正则搜索）
* 按文件中顺序的正则匹配 ~或~*
* 匹配不带任何修饰的前缀匹配。

**location root**
root 指定目录的上级目录，并且该上级目录要含有locatoin指定名称的同名目录。
```
location /img/ {
	root /var/www/image;
}
```
若按照这种配置的话，则访问/img/目录下的文件时，nginx会去/var/www/image/img/目录下找文件

```bash
#user  nginx;

# 根据cpu核数配置进程
worker_processes  1;

#error_log  logs/error.log;
#error_log  logs/error.log  notice;
#error_log  logs/error.log  info;

#pid        logs/nginx.pid;


events {
    # 后台允许的并发数
    worker_connections  1024;
}


http {
    # 映射表
    include       mime.types;
    default_type  application/octet-stream;

    #log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
    #                  '$status $body_bytes_sent "$http_referer" '
    #                  '"$http_user_agent" "$http_x_forwarded_for"';

    # 访问日期
    #access_log  logs/access.log  main;

    # 开启高速传输模式
    sendfile        on;

    # 减少网络报文
    #tcp_nopush     on;

    #keepalive_timeout  0;
    keepalive_timeout  65;

    # 是否开启文件压缩
    #gzip  on;

    # 导入其他文件中的ng配置
    # include /self/nginx/conf/*.conf

    # 监听服务
    server {
        # 端口
        listen       80;
        # 服务域名
        server_name  localhost;

        #charset koi8-r;

        #access_log  logs/host.access.log  main;

        location / {
            root   /www/wwwroot/demo/;
            index  index.html index.htm;
        }

        #error_page  404              /404.html;

        # redirect server error pages to the static page /50x.html
        #
        error_page   500 502 503 504  /50x.html;
        location = /50x.html {
            root   html;
        }

        # proxy the PHP scripts to Apache listening on 127.0.0.1:80
        #
        #location ~ \.php$ {
        #    proxy_pass   http://127.0.0.1;
        #}

        # pass the PHP scripts to FastCGI server listening on 127.0.0.1:9000
        #
        #location ~ \.php$ {
        #    root           html;
        #    fastcgi_pass   127.0.0.1:9000;
        #    fastcgi_index  index.php;
        #    fastcgi_param  SCRIPT_FILENAME  /scripts$fastcgi_script_name;
        #    include        fastcgi_params;
        #}

        # deny access to .htaccess files, if Apache's document root
        # concurs with nginx's one
        #
        #location ~ /\.ht {
        #    deny  all;
        #}
    }


    # another virtual host using mix of IP-, name-, and port-based configuration
    #
    #server {
    #    listen       8000;
    #    listen       somename:8080;
    #    server_name  somename  alias  another.alias;

    #    location / {
    #        root   html;
    #        index  index.html index.htm;
    #    }
    #}


    # HTTPS server
    #
    #server {
    #    listen       443 ssl;
    #    server_name  localhost;

    #    ssl_certificate      cert.pem;
    #    ssl_certificate_key  cert.key;

    #    ssl_session_cache    shared:SSL:1m;
    #    ssl_session_timeout  5m;

    #    ssl_ciphers  HIGH:!aNULL:!MD5;
    #    ssl_prefer_server_ciphers  on;

    #    location / {
    #        root   html;
    #        index  index.html index.htm;
    #    }
    #}

}
```

## 安装Nginx

依赖环境
1. 安装gcc
安装 nginx 需要先将官网下载的源码进行编译，编译依赖 gcc 环境，如果没有 gcc 环境，则需要安装：
```
yum install gcc-c++
```

2. PCRE pcre-devel 安装
PCRE(Perl Compatible Regular Expressions) 是一个Perl库，包括 perl 兼容的正则表达式库。nginx 的 http 模块使用 pcre 来解析正则表达式，所以需要在 linux 上安装 pcre 库，pcre-devel 是使用 pcre 开发的一个二次开发库。nginx也需要此库。命令：
```
yum install -y pcre pcre-devel
```

3. zlib 安装
zlib 库提供了很多种压缩和解压缩的方式， nginx 使用 zlib 对 http 包的内容进行 gzip ，所以需要在 Centos 上安装 zlib 库。

```
yum install -y zlib zlib-devel
```

4. OpenSSL 安装
OpenSSL 是一个强大的安全套接字层密码库，囊括主要的密码算法、常用的密钥和证书封装管理功能及 SSL 协议，并提供丰富的应用程序供测试或其它目的使用。
nginx 不仅支持 http 协议，还支持 https（即在ssl协议上传输http），所以需要在 Centos 安装 OpenSSL 库。
```
yum install -y openssl openssl-devel
```

5. 下载Nginx
```
wget https://nginx.org/download/nginx-1.22.0.tar.gz
```

6. 解压nginx
```
tar -zxvf nginx-1.22.0.tar.gz
cd nginx-1.22.0
```

7. 执行nginx-configure文件
```
[root@ecs-87376 nginx-1.22.0]# ls
auto  CHANGES  CHANGES.ru  conf  configure  contrib  html  LICENSE  man  README  src
```

```
./configure
```

8. make命令编译
执行完后会有一个MakeFile文件夹

make 是一个命令工具，它解释 Makefile 中的指令（应该说是规则）。在 Makefile文件中描述了整个工程所有文件的编译顺序、编译规则

```
make
make install
```

9. 查询nginx 安装目录
```
[root@ecs-87376 nginx-1.22.0]# whereis nginx
nginx: /usr/local/nginx
[root@ecs-87376 nginx-1.22.0]# 
```

10. 进入安装目录执行nginx

前往安装目录找到sbin 执行nginx
```
[root@ecs-87376 nginx-1.22.0]# cd /usr/local/nginx
[root@ecs-87376 nginx]# ll
total 16
drwxr-xr-x 2 root root 4096 Jun 27 01:41 conf
drwxr-xr-x 2 root root 4096 Jun 27 01:41 html
drwxr-xr-x 2 root root 4096 Jun 27 01:41 logs
drwxr-xr-x 2 root root 4096 Jun 27 01:41 sbin
[root@ecs-87376 nginx]# cd sbin
[root@ecs-87376 sbin]# ll
total 4932
-rwxr-xr-x 1 root root 5049624 Jun 27 01:41 nginx
[root@ecs-87376 sbin]# ./nginx
[root@ecs-87376 sbin]# 
```

### yum install 404解决方案
1. 进入配置文件内，删除所有的.repo文件（也可以备份）
```bash
#进入配置文件夹
cd /etc/yum.repos.d/
#删除旧的配置文件
rm *.repo
#输入“y”回车确认
```

2. ls确保该目录下的.repo文件已完全删除, 下载可以用的.repo文件
```bash
wget -O /etc/yum.repos.d/CentOS-Base.repo https://mirrors.aliyun.com/repo/Centos-vault-8.5.2111.repo
```
如果你没有安装wget，也可以用下面命令： 
```
curl -o /etc/yum.repos.d/CentOS-Base.repo https://mirrors.aliyun.com/repo/Centos-vault-8.5.2111.repo
```
3. 运行 yum makecache 生成缓存
```
yum makecache
```

## Linux 防火墙

### firewalld的基本使用

启动： `systemctl start firewalld`

查看状态： `systemctl status firewalld` 

停止：`systemctl stop firewalld `

禁用：`systemctl disable firewalld`

### systemctl
systemctl是CentOS7的服务管理工具中主要的工具，它融合之前service和chkconfig的功能于一体。

启动一个服务：`systemctl start firewalld.service`

关闭一个服务：`systemctl stop firewalld.service`

重启一个服务：`systemctl restart firewalld.service`

显示一个服务的状态：`systemctl status firewalld.service`

在开机时启用一个服务：`systemctl enable firewalld.service`

在开机时禁用一个服务：`systemctl disable firewalld.service`

查看服务是否开机启动：`systemctl is-enabled firewalld.service`

查看已启动的服务列表：`systemctl list-unit-files|grep enabled`

查看启动失败的服务列表：`systemctl --failed`

### 配置firewalld-cmd

查看版本： `firewall-cmd --version`

查看帮助： `firewall-cmd --help`

显示状态： `firewall-cmd --state`

查看所有打开的端口： `firewall-cmd --zone=public --list-ports`

更新防火墙规则： `firewall-cmd --reload`

查看区域信息:  `firewall-cmd --get-active-zones`

查看指定接口所属区域： `firewall-cmd --get-zone-of-interface=eth0`

拒绝所有包：`firewall-cmd --panic-on`

取消拒绝状态： `firewall-cmd --panic-off`

查看是否拒绝： `firewall-cmd --query-panic`


**那怎么开启一个端口呢** 

* 添加

`firewall-cmd --zone=public --add-port=80/tcp --permanent`   

（--permanent永久生效，没有此参数重启后失效）

* 重新载入

`firewall-cmd --reload`

* 查看

`firewall-cmd --zone= public --query-port=80/tcp`

* 删除

`firewall-cmd --zone= public --remove-port=80/tcp --permanent`

## nginx 开机自启动
1. 如果用yum install命令安装的，yum命令会自动创建nginx.service文件，直接用命令
```
systemcel enable nginx.service
```

2.如果使用源码手动编译的则需要手动创建 nginx.service 服务文件。

在系统服务目录里创建nginx.service文件
```
vi /lib/systemd/system/nginx.service
```

内容如下
```
[Unit]
Description=nginx
After=network.target
  
[Service]
Type=forking
ExecStart=/usr/local/nginx/sbin/nginx
ExecReload=/usr/local/nginx/sbin/nginx -s reload
ExecStop=/usr/local/nginx/sbin/nginx -s quit
PrivateTmp=true

[Install] 
WantedBy=multi-user.target
```
Description:描述服务
After:描述服务类别
[Service]服务运行参数的设置
Type=forking是后台运行的形式
ExecStart为服务的具体运行命令
ExecReload为重启命令
ExecStop为停止命令
PrivateTmp=True表示给服务分配独立的临时空间
注意：[Service]的启动、重启、停止命令全部要求使用绝对路径
[Install]运行级别下服务安装的相关设置，可设置为多用户，即系统运行级别为3

保存退出

设置开启启动

```
systemctl enable nginx.service
```

如果不想开机自启动了，可以使用下面的命令取消开机自启动
```
systemctl disable nginx
```

服务的启动/停止/刷新配置文件/查看状态

```sh
# systemctl start nginx.service　         启动nginx服务

# systemctl stop nginx.service　          停止服务

# systemctl restart nginx.service　       重新启动服务

# systemctl list-units --type=service     查看所有已启动的服务

# systemctl status nginx.service          查看服务当前状态

# systemctl enable nginx.service          设置开机自启动

# systemctl disable nginx.service         停止开机自启动
```

## yum

```bash
# yum 包安装源配置目录
/etc/yum.repos.d/
# 查看本地nginx安装情况
yum list | grep nginx
```

[配置nginx的yum源](https://nginx.org/en/linux_packages.html#RHEL)
```
[nginx-stable]
name=nginx stable repo
baseurl=http://nginx.org/packages/centos/$releasever/$basearch/
gpgcheck=1
enabled=1
gpgkey=https://nginx.org/keys/nginx_signing.key
module_hotfixes=true

[nginx-mainline]
name=nginx mainline repo
baseurl=http://nginx.org/packages/mainline/centos/$releasever/$basearch/
gpgcheck=1
enabled=0
gpgkey=https://nginx.org/keys/nginx_signing.key
module_hotfixes=true
```