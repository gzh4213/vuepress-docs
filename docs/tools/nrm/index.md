# nrm
nrm 是一个npm源管理器，允许你快速的在npm源间切换

## 安装
`npm install -g nrm`

## 常用命令
```bash
# 查看本地源
nrm ls
# 切换源
nrm use <rname>
# 添加源
nrm add <registry> <url>： 定制源 reigstry为源名，url为源的路径
# 删除相应的源
nrm del <registry>
# 测试速度
nrm test npm
```