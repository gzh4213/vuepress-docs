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
          text: '原生js',
          items: [
            {
              text: '基础知识',
              link: '/frontend/js/native'
            },
            {
              text: '数组方法',
              link: '/frontend/js/'
            }
          ]
        },
        {
          text: 'Vue',
          items: [
            {
              text: 'Vue',
              link: '/frontend/vue/'
            },
            {
              text: 'API',
              link: '/frontend/vue/API'
            },
            {
              text: 'Pinia',
              link: '/frontend/vue/Pinia'
            }
          ]
        },
        {
          text: 'React',
          items: [
            {
              text: 'React',
              link: '/frontend/react/'
            }
          ]
        },
        {
          text: 'TS',
          items: [
            {
              text: 'TS',
              link: '/frontend/ts/'
            },
            {
              text: '配置',
              link: '/frontend/ts/config'
            }
          ]
        },
        {
          text: 'NPM',
          items: [
            {
              text: 'NPM',
              link: '/frontend/npm/'
            }
          ]
        },
        {
          text: '开发规范',
          items: [
            {
              text: '规范',
              link: '/frontend/specification/'
            },
            {
              text: 'vue3-ts',
              link: '/frontend/specification/vue3-ts'
            }
          ]
        },
        {
          text: '资料',
          items: [
            {
              text: '汇总',
              link: '/frontend/data/'
            },
            {
              text: 'redis',
              link: '/frontend/data/redis'
            },
            {
              text: 'sql',
              link: '/frontend/data/sql/'
            },
            {
              text: 'node',
              link: '/frontend/data/node/'
            },
            {
              text: '性能',
              link: '/frontend/data/performance/'
            },
          ],
        },
        {
          text: '面试',
          items: [
            {
              text: 'JS',
              link: '/frontend/interview/'
            },
            {
              text: 'lixiang',
              link: '/frontend/interview/lixiang'
            },
            {
              text: '输出结果',
              link: '/frontend/interview/result'
            },
            {
              text: '手写方法',
              link: '/frontend/interview/rewrite'
            },
            {
              text: 'Vue',
              link: '/frontend/interview/Vue'
            },
            {
              text: 'CSS',
              link: '/frontend/interview/CSS'
            },
            {
              text: '2022',
              link: '/frontend/interview/2022'
            },
          ]
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
              text: 'Nginx',
              link: '/backend/Nginx/'
            }
          ]
        },
        {
          text: 'LINUX',
          items: [
            {
              text: '基本操作命令',
              link: '/backend/Linux/'
            },
            {
              text: '文件操作命令',
              link: '/backend/Linux/file'
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
      '/more/': [
        {
          text: 'Jest',
          items: [
            { text: 'Jest', link: '/more/test/jest/' }
          ],
        },
        {
          text: 'vuepresss',
          items: [
            { text: '文档', link: '/more/vuepress/' },
            { text: '语法', link: '/more/vuepress/directory-structure' },
          ],
        },
        {
          text: '问题记录',
          items: [
            { text: 'github', link: '/more/tutorial/' },
            { text: 'pac', link: '/more/tutorial/pac' },
            { text: 'ssh', link: '/more/tutorial/ssh' },
          ],
        }
      ],
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
