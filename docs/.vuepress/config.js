module.exports = {
  title: 'frontEnd',
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
      { text: '教程', link: '/tutorial/'},
      { text: 'GitHub', link: 'https://github.com/gzh4213', target: '_blank', rel: 'noopener noreferrer'}
    ],
    sidebar: {
      '/tutorial/': [
        {
          title: '教程',
          collapsable: false,
          children: [
            '',
            'pac'
          ]
        }
      ]
    },
    search: true,
    searchMaxSuggestions: 10,
    lastUpdated: 'Last Updated', // string | boolean
  },
  
}