module.exports = {
  title: 'front-end',
  description: "Leo's记录前端学习的个人文档站点",
  head: [
    ['link', { rel: 'icon', href: './public/logo.png'}]
  ],
  markdown: {
    lineNumbers: true
  },
  evergreen: true,
  themeConfig: {
    // logo: '/public/logo.png'
    // navbar: false,  // 禁用导航栏
    nav: [
      { text: '首页', link: '/'},
      { 
        text: '前端',
        items: [
          { text: 'Vue', link: '/frontend/vue/' },
          { text: 'React', link: '/frontend/react/' }
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
    sidebar: {
      '/frontend/vue/': [
        {
          title: 'Vue',
          collapsable: false,
          children: [
            '',
            'one'
          ]
        }
      ],
      '/tutorial/': [
        {
          title: '教程',
          collapsable: false,
          children: [
            '',
            'pac'
          ]
        }
      ],
      '/dev-helper/': [
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
    lastUpdated: 'Last Updated', // string | boolean
  },
  
}