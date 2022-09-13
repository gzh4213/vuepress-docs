import { defineConfig } from 'vitepress'

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
        link: '/frontend/js/'
      },
      {
        text: '后端',
        link: '/backend/PM2/'
      },
      {
        text: '算法',
        link: '/ALG/'
      },
      {
        text: '工程化',
        link: '/engineering/rollup/'
      },
      {
        text: '工具软件',
        link: '/tools/nvm/'
      },
      {
        text: '更多',
        link: '/more/vuepress/'
      }
    ],
    sidebar: {
      // 侧边栏设置
      '/frontend/': [
        {
          text: '',
          items: [
            {
              text: '原生js',
              link: '/frontend/js/'
            },
            { text: 'Vue', link: '/frontend/vue/' },
            { text: 'React', link: '/frontend/react/' },
            { text: 'typesript', link: '/frontend/ts/' },
            { text: 'npm', link: '/frontend/npm/' },
            { text: '开发规范', link: '/frontend/specification/' },
            { text: '资料', link: '/frontend/data/' },
            {
              text: '面试',
              link: '/frontend/interview/'
            }
          ],
        }
      ],
      '/backend/': [
        {
          text: '',
          items: [
            {
              text: 'PM2',
              link: '/backend/PM2/'
            },
            {
              text: 'LINUX',
              link: '/backend/Linux/'
            },
            {
              text: 'Nginx',
              link: '/backend/Nginx/'
            }
          ]
        },
        {
          text: '',
          items: [
            {
              text: '数据库',
              link: '/backend/database/'
            }
          ]
        },
      ],
      '/engineering/': [{
        text: '',
        items: [
          { text: 'rollup', link: '/engineering/rollup/' },
          { text: 'vite', link: '/engineering/vite/' },
          { text: 'webpack', link: '/engineering/webpack/' },
        ],
      }],
      '/tools/': [{
        text: '',
        items: [
          {
            text: 'nvm',
            link: '/tools/nvm/'
          },
          {
            text: 'nrm',
            link: '/tools/nrm/'
          }
        ]
      }],
      '/more/': [{
        text: '',
        items: [
          { text: 'vuepresss', link: '/more/vuepress/' },
          { text: '问题记录', link: '/more/tutorial/' },
          { text: 'Jest', link: '/more/test/jest/' }
        ],
      }],
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
