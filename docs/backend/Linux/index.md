# linux

## 文件目录结构
```bash
dr-xr-xr-x.  25 root root 4.0K Oct 18 23:08 .
dr-xr-xr-x.  25 root root 4.0K Oct 18 23:08 ..
drwxr-xr-x    4 www  www  4.0K Oct 19 23:25 app
-rw-r--r--    1 root root    0 Jul  8 11:34 .autorelabel
lrwxrwxrwx    1 root root    7 Jun 22  2021 bin -> usr/bin # Binaries二进制的意思，一些命令文件
dr-xr-xr-x.   5 root root 4.0K Oct 18 17:53 boot  # 启动linux文件目录
drwxr-xr-x    3 root root 4.0K Jul  8 11:49 CloudResetPwdAgent
drwxr-xr-x    7 root root 4.0K Jul  8 11:49 CloudResetPwdUpdateAgent
drwxr-xr-x    6 root root 4.0K Jul  8 11:49 CloudrResetPwdAgent
drwxr-xr-x   19 root root 2.9K Oct 18 23:08 dev # 设备文件
drwxr-xr-x.  91 root root 4.0K Oct 18 23:22 etc # 主要放置应用配置文件
drwxr-xr-x.   3 root root 4.0K Oct 18 18:11 home  # 用户目录
lrwxrwxrwx    1 root root    7 Jun 22  2021 lib -> usr/lib
lrwxrwxrwx    1 root root    9 Jun 22  2021 lib64 -> usr/lib64
drwx------.   2 root root  16K Jul  8 11:25 lost+found
drwxr-xr-x.   2 root root 4.0K Jun 22  2021 media # 用于挂载的空目录
drwxr-xr-x.   2 root root 4.0K Jun 22  2021 mnt # 用于挂载的空目录
drwxr-xr-x.   2 root root 4.0K Jun 22  2021 opt # 用于挂载的空目录
drwxr-xr-x    2 root root 4.0K Oct 18 18:28 patch
-rw-r--r--    1 root root  195 Oct 18 18:32 .pearrc
dr-xr-xr-x  117 root root    0 Oct 18 23:08 proc # Process进程缩写，虚拟目录，系统内存的映射
drw-------    6 root root 4.0K Oct 20 00:36 .Recycle_bin
dr-xr-x---.   7 root root 4.0K Oct 28 00:10 root # root用户目录
drwxr-xr-x   27 root root  760 Oct 18 23:32 run # 系统启动和程序启动的运行时文件
lrwxrwxrwx    1 root root    8 Jun 22  2021 sbin -> usr/sbin # 管理员用户使用的命令
drwxr-xr-x.   2 root root 4.0K Jun 22  2021 srv
dr-xr-xr-x   13 root root    0 Oct 18 23:08 sys
drwxrwxrwt.   5 root root 4.0K Nov  2 18:27 tmp # temporary缩写，临时文件
drwxr-xr-x.  13 root root 4.0K Jul  8 11:43 usr # unix shared resources(共享资源)缩写，主要存放应用程序文件
drwxr-xr-x.  20 root root 4.0K Oct 18 18:25 var # variable(变量)的缩写，存放缓存和一些需要动态变化的文件
drwxr-xr-x    8 root root 4.0K Oct 18 22:46 www
```

## ls
ls是list的缩写，就是列出当前目录下的文件信息

* -l选项：
  * l表示long,以长列表格式显示，加上-l选项可以获取文件的详细信息
* -a选项：
  * a表示all，表示显示所有文件（包括隐藏文件）
* -alh:
  * h 已人性化方式显示文件的大小

* 字段说明
```bash
[root@ecs-87376 /]# ls -al
total 100
# 第一个字段
# d开头：目录 l开头：软连接  -开头：二进制文件
# r-xr-xr-x 权限

# 第二个字段 硬链接数量
# 目录类型：代表目录下文件数量
# 二进制文件：表示当前文件，显示为1
# 软链接：硬链接数量

# 第三四个字段 文件的所有者和所属组

# 第五个字段 文件的大小 单位字节

# 第六七八字段 文件创建时间

dr-xr-xr-x.  25 root root  4096 Oct 18 23:08 . # 单点代表当前目录
dr-xr-xr-x.  25 root root  4096 Oct 18 23:08 .. # 父级目录
drwxr-xr-x    4 www  www   4096 Oct 19 23:25 app
-rw-r--r--    1 root root     0 Jul  8 11:34 .autorelabel
lrwxrwxrwx    1 root root     7 Jun 22  2021 bin -> usr/bin

```

## cd
change directory, 变更目录   

## pwd
print working directory, 打印工作目录，显示当前所在目录的绝对路径

## cp
copy简写，复制文件的命令

* 用法1: cp SOURCE DEST(如果DEST不存在则创建，存在则覆盖)
* 用法2: cp SOURCE1 SOURCE2 SOURCE3 DEST (DEST必须为目录)
* 用法3: 使用cp拷贝目录， 加 -r 选项：表示递归

## mv 
move的简写，移动

* 用法1: mv SOURCE DEST(如果DEST不存在则创建，存在则覆盖)
* 用法2: mv SOURCE1 SOURCE2 SOURCE3 DEST (DEST必须为目录)
* 用法3: 使用mv移动目录
* 用法4: 重命名 `mv etc etc.bak`

> DEST 如果目标是个文件，会覆盖掉这个文件, 如果目录下有重名的也会被覆盖掉 

## touch
创建空文件

* 基本用法：
  * touch filename(不存在则创建、存在则修改最后访问日期)
* 扩展用法：
  * `touch file1 file2 file3`
  * `touch file{1..30}`
* 选项：
  * -t(time),我们指定一个touch的时间
  * `touch -t 12323444555 filename`

## mkdir
创建目录

* 基本用法：
  * `mkdir dirname`
* 扩展用法：
  * `mkdir dir1 dir2 dir3`
  * `mkdir dir{1..30}`
* 选项：
  * -p(parents), 父目录不存在时创建父目录
  * `mkdir -p abc/def/ghi`

## rm
删除文件或者目录

* 基本用法：
  * `rm filename`
* 选项：
  * -f: 就是force的意思，忽略不存在的文件，不会出现警告信息；
  * -r: 递归删除，最常用在目录的删除

> 注意：rm是高风险操作，使用该命令一定要紧绷神经，仔细再仔细
> 删库跑路：`rm -rf *`
> 还有一个rmdir的命令，但是只能用于删除空目录，平时不如rm实用，所以不常用，这里只是提一下。rmdir和mkdir一样可以接-p选项来递归删除目录

## 连接服务器
`ssh root@ip`

## 下载包指令
`wget https://nodejs.org/dist/v16.15.1/node-v16.15.1-linux-x64.tar.xz`

## 解压
使用tar命令

解压node压缩包

`tar -xvf node-v14.19.1-linux-x64.tar.xz`

### 参数
* -c: 压缩
* -x：解压
* -t：查看内容
* -r：向压缩归档文件末尾追加文件
* -u：更新原压缩包中的文件

这五个是独立的命令，压缩解压都要用到其中一个，可以和别的命令连用但只能用其中一个。下面的参数是根据需要在压缩或解压档案时可选的。

* -z：有gzip属性的
* -j：有bz2属性的
* -Z：有compress属性的
* -v：显示所有过程
* -O：将文件解开到标准输出

下面的参数-f是必须的

* -f: 使用档案名字，切记，这个参数是最后一个参数，后面只能接档案名。

```bash
# tar -cf all.tar *.jpg 
# 这条命令是将所有.jpg的文件打成一个名为all.tar的包。-c是表示产生新的包，-f指定包的文件名。 

# tar -rf all.tar *.gif 
# 这条命令是将所有.gif的文件增加到all.tar的包里面去。-r是表示增加文件的意思。 

# tar -uf all.tar logo.gif 
# 这条命令是更新原来tar包all.tar中logo.gif文件，-u是表示更新文件的意思。 

# tar -tf all.tar 
# 这条命令是列出all.tar包中所有文件，-t是列出文件的意思 

# tar -xf all.tar 
# 这条命令是解出all.tar包中所有文件，-x是解开的意思 

```

```bash
# 压缩
# tar –cvf jpg.tar *.jpg //将目录里所有jpg文件打包成tar.jpg
# tar –czf jpg.tar.gz *.jpg   //将目录里所有jpg文件打包成jpg.tar后，并且将其用gzip压缩，生成一个gzip压缩过的包，命名为jpg.tar.gz
# tar –cjf jpg.tar.bz2 *.jpg //将目录里所有jpg文件打包成jpg.tar后，并且将其用bzip2压缩，生成一个bzip2压缩过的包，命名为jpg.tar.bz2
# tar –cZf jpg.tar.Z *.jpg   //将目录里所有jpg文件打包成jpg.tar后，并且将其用compress压缩，生成一个umcompress压缩过的包，命名为jpg.tar.Z
# rar a jpg.rar *.jpg //rar格式的压缩，需要先下载rar for Linux
# zip jpg.zip *.jpg //zip格式的压缩，需要先下载zip for linux

# 解压
# tar –xvf file.tar //解压 tar包
# tar -xzvf file.tar.gz //解压tar.gz
# tar -xjvf file.tar.bz2   //解压 tar.bz2
# tar –xZvf file.tar.Z   //解压tar.Z
# unrar e file.rar //解压rar
# unzip file.zip //解压zip

```

## 安装NVM

### 配置环境变量
本文在root下操作

1. 首先修改 /ect/profile 配置nvm node 的安装地址

```bash
vim /etc/profile
```

在`/etc/profile` 底部添加一下内容

vi 输入i命令进入编辑模式，输入完成后 点击esc键，输入:wq保存并退出
```bash
export NVM_BIN="/usr/local/nvm/versions/node" # node安装地址
export NVM_DIR="/usr/local/nvm" # nvm安装地址
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
```

2. 更新配置
```bash
source /etc/profile # 更新配置
```

### 安装

## 文件属性

ll 查看文件属性信息

```sh
[root@ecs-87376 /]# ll
total 72
lrwxrwxrwx    1 root root     7 Nov  3  2020 bin -> usr/bin
dr-xr-xr-x.   5 root root  4096 Dec 13  2021 boot
drwxr-xr-x    7 root root  4096 Feb 26  2021 CloudResetPwdUpdateAgent
drwxr-xr-x    6 root root  4096 Feb 26  2021 CloudrResetPwdAgent
drwxr-xr-x   19 root root  2960 Dec 21  2021 dev
drwxr-xr-x.  85 root root  4096 Jun 27 00:05 etc
drwxr-xr-x.   2 root root  4096 Nov  3  2020 home
lrwxrwxrwx    1 root root     7 Nov  3  2020 lib -> usr/lib
lrwxrwxrwx    1 root root     9 Nov  3  2020 lib64 -> usr/lib64
drwx------.   2 root root 16384 Feb 26  2021 lost+found
drwxr-xr-x.   2 root root  4096 Nov  3  2020 media
drwxr-xr-x.   2 root root  4096 Nov  3  2020 mnt
drwxr-xr-x    3 root root  4096 Jun 27 00:21 node-server-demo
drwxr-xr-x.   3 root root  4096 Dec 21  2021 opt
dr-xr-xr-x  100 root root     0 Dec 21  2021 proc
dr-xr-x---.   6 root root  4096 Jun 27 00:21 root
drwxr-xr-x   24 root root   680 Dec 21  2021 run
lrwxrwxrwx    1 root root     8 Nov  3  2020 sbin -> usr/sbin
drwxr-xr-x.   2 root root  4096 Nov  3  2020 srv
dr-xr-xr-x   13 root root     0 Dec 21  2021 sys
drwxrwxrwt.   4 root root  4096 Jun 27 00:05 tmp
drwxr-xr-x.  12 root root  4096 Feb 26  2021 usr
drwxr-xr-x.  20 root root  4096 Dec 13  2021 var
[root@ecs-87376 /]# cd node-server-demo/
[root@ecs-87376 node-server-demo]# ll
total 32
-rw-r--r--  1 root root   253 Jun 27 00:21 index.js
drwxr-xr-x 59 root root  4096 Jun 27 00:16 node_modules
-rw-r--r--  1 root root   280 Jun 27 00:16 package.json
-rw-r--r--  1 root root 18146 Jun 27 00:16 package-lock.json
[root@ecs-87376 node-server-demo]# 
```

### 首字母作用
* 文件的开头对应是 -
* 目录开头对应的是d
* 快捷方式对应的是l
* U盘对应的是b
* 鼠标键盘等硬件对应的c

### 权限

* 每三个一组rw-，-为缺少权限

### 第二列
* 代表你有多少文件 和目录里面有多少文件

### 第三列
* 创建该文件用户的名字  第二个是改文件所属用户组的名字
* 第一个就是用户名 第二个就是组名

### 第四列
* 表示改文件和文件夹所属的体积

### 第五列
* 创建改文件的日期

### 第六列
* 代表的就是文件或者文件夹等一系列的名称

## 添加用户

adduser zhangsan # 创建用户

passwd zhangsan # 创建密码

```bash
[root@ecs-87376 /]# adduser zhangsan
[root@ecs-87376 /]# passwd zhangsan
Changing password for user zhangsan.
New password: 
BAD PASSWORD: The password contains the user name in some form
Retype new password: 
passwd: all authentication tokens updated successfully.
```

## 文件权限
RWX 分别是可读 可写 可执行权限

这个权限我们可以修改使用chmod 777 文件名

读------R对应数字4

写------W对应数字2

可执行-----X对应数字1

所以7就是可读可写可执行权限

![rwx](https://img-blog.csdnimg.cn/img_convert/92bd924f9f13c0285ce8779de4c922a6.png)