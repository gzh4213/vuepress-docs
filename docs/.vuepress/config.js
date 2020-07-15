module.exports = {
  title: '文档',
  description: '学习资料集合',
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
      { text: 'GitHub', link: 'https://github.com/gzh4213', target: '_blank', rel: 'noopener noreferrer'}
    ],
    sidebar: 'auto',
    search: true,
    searchMaxSuggestions: 10,
    lastUpdated: 'Last Updated', // string | boolean
  },
  
}