# nvm
nvm是一个node的版本管理工具，可以简单操作node版本的切换、安装、查看等等

## 安装

[官方安装脚本](https://github.com/nvm-sh/nvm#installing-and-updating)

```bash
# curl安装脚本指令
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash

# wget安装脚本指令
wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash
```

执行以上脚本完毕后，在`~/.bash_profile`, `~/.zshrc`, `~/.profile`, or `~/.bashrc`中添加nvm的加载配置

```bash
export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
```

重载执行文件`~/.bash_profile`, `~/.zshrc`, `~/.profile`, or `~/.bashrc`

```bash
source ~/.bash_profile
```

## 常用命令
```bash
# 安装指定node版本
nvm install <version>
# 切换版本
nvm use <version>

# 列出所有已安装的 node 版本
nvm list|ls

# 列出所有远程服务器的版本
nvm list-remote

# 显示所有可下载的版本
nvm list available

# 安装最新版稳定版node
nvm install stable

# 删除已安装的指定版本
nvm uninstall <version>

# 当前 node 版本
nvm current

# 给不同的版本号添加别名
nvm alias <别名> <version>

# 删除已定义的别名
nvm unalias <别名>

# 设置默认版本
nvm alias default <version>
```