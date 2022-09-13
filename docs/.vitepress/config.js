module.exports = {
  title: '热爱生活',
  description: '前端学习文档整理',
  markdown: {
    lineNumbers: true, // 显示代码块行数
  },
  evergreen: true,
  themeConfig: {
    logo: '/docs.svg',
    // navbar: false,  // 禁用导航栏
    nav: [
      // 导航栏设置
      { text: '首页', link: '/' },
      {
        text: '前端',
        items: [
          {
            text: '原生js',
            link: '/frontend/js/'
          },
          { text: 'Vue', link: '/frontend/vue/' },
          { text: 'React', link: '/frontend/react/' },
          { text: 'typesript', link: '/ts/' },
          { text: 'npm', link: '/npm/' },
          { text: '开发规范', link: '/specification/' },
          { text: '资料', link: '/data/' },
          {
            text: '面试',
            link: '/interview/'
          }
        ],
      },
      {
        text: '后端',
        items: [
          {
            text: 'PM2',
            link: '/PM2/'
          },
          {
            text: 'LINUX',
            link: '/Linux/'
          },
          {
            text: 'Nginx',
            link: '/Nginx/'
          }
        ]
      },
      {
        text: '算法',
        link: '/ALG/'
      },
      {
        text: '工程化',
        items: [
          { text: 'rollup', link: '/rollup/' },
          { text: 'vite', link: '/vite/' },
          { text: 'webpack', link: '/webpack/' },
        ],
      },
      {
        text: '工具软件',
        items: [
          // {
          // 	text: '编程软件',
          // 	items: [
          // 		{
          // 			text: 'nvm',
          // 			link: '/vuepress/'
          // 		},
          // 		{
          // 			text: 'nrm',
          // 			link: '/vuepress/'
          // 		}
          // 	]
          // },
          {
            text: '效率提升',
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
          }
        ],
      },
      {
        text: '数据库',
        link: '/database/',
      },
      {
        text: '更多',
        items: [
          { text: 'vuepresss', link: '/vuepress/' },
          { text: '问题记录', link: '/tutorial/' },
          { text: 'Jest', link: '/test/jest/' }
        ],
      },
      // {
      // 	text: 'GitHub',
      // 	link: 'https://github.com/gzh4213',
      // 	target: '_blank',
      // 	rel: 'noopener noreferrer',
      // },
    ],
    sidebar: {
      // 侧边栏设置
      // '/data/': require('./sidebars/data'),
      // '/frontend/vue/': require('./sidebars/vue'),
      // '/test/jest/': require('./sidebars/test'),
      // '/tutorial/': require('./sidebars/tutorial'),
      // '/vuepress/': require('./sidebars/vuepress'),
      // '/rollup/': require('./sidebars/rollup'),
      // '/interview/': require('./sidebars/interview'),
      // '/frontend/js/': require('./sidebars/js'),
      // '/ts/': require('./sidebars/ts'),
      // '/webpack/': require('./sidebars/webpack'),
      // '/PM2/': require('./sidebars/pm2'),
      // '/Linux/': require('./sidebars/linux'),
      // '/Nginx/': require('./sidebars/nginx'),
      // '/ALG/': require('./sidebars/alg'),
      // '/specification/': require('./sidebars/specification'),
  
    },
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2019-present Evan You'
    }
  },
  sidebarDepth: 4,
  search: {
    maxSuggestions: 10
  },
  lastUpdated: '最后更新', // string | boolean
  plugins: [
		['@vuepress/back-to-top'],
  ]
}
