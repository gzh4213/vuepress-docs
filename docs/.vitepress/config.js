import { defineConfig } from 'vitepress'
import frontend from './sidebars/frontend'
import server from './sidebars/server'
import node from './sidebars/node'
import alg from './sidebars/alg'
import more from './sidebars/more'
import interview from './sidebars/interview'

export default defineConfig({
  title: '城郭小镇',
  description: '前端学习文档整理',
  appearance: true, // 是否启动暗黑模式
  ignoreDeadLinks: true, // 忽略死链接
  lastUpdated: true, // 最近更新时间 通过themeConfig.lastUpdatedText自定义文本
  markdown: {
    lineNumbers: true, // 显示代码块行数
  },
  themeConfig: {
    logo: '/docs.svg',
    // navbar: false,  // 禁用导航栏
    nav: [
      // 导航栏设置
      {
        text: '首页',
        link: '/'
      },
      {
        text: '前端',
        link: frontend[0].items[0].link
      },
      {
        text: '服务端',
        link: server[0].items[0].link
      },
      {
        text: 'Node',
        link: node[0].items[0].link
      },
      {
        text: '面试',
        link: interview[0].items[0].link
      },
      {
        text: '算法',
        link: alg[0].items[0].link
      },
      {
        text: '更多',
        link: more[0].items[0].link
      }
    ],
    sidebar: {
      // 侧边栏设置
      '/views/frontend/': frontend,
      '/views/server/': server,
      '/views/node/': node,
      '/views/ALG/': alg,
      '/views/more/': more,
      '/views/interview/': interview,
    },
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2019-present Guo Zhen'
    },
    lastUpdatedText: '最后更新',
    docFooter: {
      prev: '上一节',
      next: '下一节'
    }
  }
})
