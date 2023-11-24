# 如何更新本地安装的包
定期更新你的应用所依赖的包（package）是个好习惯。因为依赖包的开发者更新了代码，你的应用也就能够获得提升。

为了完成这个任务需要：

1.在 `package.json` 文件所在的目录中执行 `npm update` 命令。
2.执行 `npm outdated` 命令。不应该有任何输出。

# npm version 指令

## 了解 version
1.0.0-0

主版本号(major).次版本号(minor).修订号(patch)-预发布号(release)

优先级以此递减，每次修改前面版本号都会影响后面版本号，所以谨慎操作

## 升级预发布号 npm version prerelease
首次执行

1.0.0 -> 1.0.0-0

再次执行

1.0.0 -> 1.0.0-1

## 升级修订号，保留预发布号

`npm version prepatch`

执行结果

1.0.0-1 -> 1.0.1-0

## 升级次版本号，保留预发布号

`npm version preminor`

执行结果

1.0.1-0 -> 1.1.0-0 

## 升级主版本号，保留预发布号

`npm version premajor`

执行结果

1.1.0-0 -> 2.0.0-0 

## 升级修订号 npm version patch

首次执行

2.0.0-0 -> 2.0.0

再次执行

2.0.0 -> 2.0.1

## 升级次版本号 npm version minor

执行结果

2.0.1 -> 2.1.0

## 升级主版本号 npm version major

执行结果

2.1.0 -> 3.0.0