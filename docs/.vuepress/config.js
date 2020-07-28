module.exports = {
  title: 'front-end',
  description: "Leo's前端学习文档",
  head: [
    ['link', { rel: 'icon', href: './public/logo.png'}]
  ],
  markdown: {
    lineNumbers: true  // 显示代码块行数
  },
  evergreen: true,
  themeConfig: {
    // logo: '/public/logo.png'
    // navbar: false,  // 禁用导航栏
    nav: [  // 导航栏设置
      { text: '首页', link: '/'},
      { 
        text: '前端',
        items: [
          { text: 'Vue', link: '/frontend/vue/' },
          { text: 'React', link: '/frontend/react/' }
        ]
      },
      {
        text: "测试",
        items: [
          { text: 'Jest', link: '/test/jest/'}
        ]
      },
      {
        text: '更多',
        items: [
          { text: '开发辅助', link: '/dev-helper/'}
        ]
      },
      { text: '教程', link: '/tutorial/'},
      { text: 'GitHub', link: 'https://github.com/gzh4213', target: '_blank', rel: 'noopener noreferrer'}
    ],
    sidebar: {  // 侧边栏设置
      '/frontend/vue/': [ // Vue模块侧边栏
        {
          title: 'Vue',
          collapsable: false,
          children: [
            '',
            'one'
          ]
        }
      ],
      '/test/jest/': [ // 测试模块
        {
          title: 'jest',
          collapsable: false,
          sidebarDepth: 3,
          children: [
            ''
          ]
        }
      ],
      '/tutorial/': [  // 教程模块
        {
          title: '教程',
          collapsable: false,
          children: [
            '',
            'pac'
          ]
        }
      ],
      '/dev-helper/': [  // 开发辅助模块
        {
          title: '开发辅助',
          collapsable: false,
          children: [
            '',
            'other'
          ]
        }
      ]
    },
    search: true,
    searchMaxSuggestions: 10,
    lastUpdated: '最后更新', // string | boolean
  },
  
}