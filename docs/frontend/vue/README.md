---
# sidebar: auto,
# tags: 
#   - Vue
---
# 单页VS多页

## 多页
页面跳转返回HTML，首屏时间快，SEO效果好，但页面切换慢

## 单页
页面跳转通过js渲染，页面切换快，但是首屏时间稍慢，SEO差


## vue组件name的用途
* 递归组件时
* 通过keep-live使用页面缓存时，可以通过name设置某个页面不进行缓存

## 看一遍transition,vue-router,vuex官方文档

## 升级vue3
首先把vue-cli升级到v4.5+
```
// 升级vue-cli
npm install -g @vue/cli@next
// 到项目目录下，升级相关插件
vue upgrade --next
// 安装 vue-cli-plugin-vue-next 插件,将项目升级为vue3.0的依赖环境，升级vue版本，vue-router,vuex升级到4.x版本
vue add vue-next
```

