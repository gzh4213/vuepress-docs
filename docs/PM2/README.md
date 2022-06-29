# PM2
Node 应用进程管理器

pm2是node进程管理器，可以利用它来简化很多node应用管理的繁琐任务，如性能监控、自动重启、负载均衡等，因为在工作中遇到服务器重启后，需要一个一个去重新启动每个服务，这样不仅繁琐、效率低，而且容易遗忘开启一些服务

## 特性
* 内建负载均衡（使用node cluster集群模块）
* 后台运行
* 0秒停机重载
* 具有Ubuntu和CentOS的启动脚本
* 停止不稳定的进程（避免无限循环）
* 控制台检测
* 提供HTTP API
* 远程控制和实时的接口（Nodejs模块，允许和PM2进程管理器交互

## 命令
```bash
 npm install pm2 -g    # 命令行安装 pm2

 pm2 start app.js -i 4  # 后台运行pm2，启动4个app.js

                        # 也可以把'max' 参数传递给 start

                        # 正确的进程数目依赖于Cpu的核心数目

 pm2 start app.js --name my-api # 命名进程

 pm2 list              # 显示所有进程状态

 pm2 monit              # 监视所有进程

 pm2 logs              # 显示所有进程日志

 pm2 stop all          # 停止所有进程

 pm2 restart all        # 重启所有进程

 pm2 reload all        # 0 秒停机重载进程 (用于 NETWORKED 进程)

 pm2 stop 0            # 停止指定的进程

 pm2 restart 0          # 重启指定的进程

 pm2 startup            # 产生 init 脚本 保持进程活着

 pm2 web                # 运行健壮的 computer API endpoint (http://localhost:9615)

 pm2 delete 0          # 杀死指定的进程

 pm2 delete all        # 杀死全部进程
```