module.exports = {
	title: 'front-end',
	description: "Leo's前端学习文档",
	head: [['link', { rel: 'icon', href: './public/logo.png' }]],
	markdown: {
		lineNumbers: true, // 显示代码块行数
	},
	evergreen: true,
	themeConfig: {
		logo: '/logo.png',
		// navbar: false,  // 禁用导航栏
		nav: [
			// 导航栏设置
			{ text: '首页', link: '/' },
			{ text: 'typesript', link: '/ts/'},
			{ text: '资料', link: '/data/' },
			{
				text: '前端',
				items: [
					{ text: 'Vue', link: '/frontend/vue/' },
					{ text: 'React', link: '/frontend/react/' },
				],
			},
			{
				text: '工程化',
				items: [
					{ text: 'rollup', link: '/rollup/' },
				],
			},
			{
				text: '测试',
				items: [{ text: 'Jest', link: '/test/jest/' }],
			},
			{
				text: 'database',
				link: '/database/',
			},
			{
				text: '更多',
				items: [
					{ text: 'npm', link: '/npm/' },
					{ text: 'vuepresss', link: '/vuepress/' },
				],
			},
			{ text: '教程', link: '/tutorial/' },
			{
				text: 'GitHub',
				link: 'https://github.com/gzh4213',
				target: '_blank',
				rel: 'noopener noreferrer',
			},
		],
		sidebarDepth: 3,
		sidebar: {
			// 侧边栏设置
			'/data/': require('./sidebars/data'),
			'/frontend/vue/': require('./sidebars/vue'),
			'/test/jest/': require('./sidebars/test'),
			'/tutorial/': require('./sidebars/tutorial'),
			'/vuepress/': require('./sidebars/vuepress')
		},
		search: true,
		searchMaxSuggestions: 10,
		lastUpdated: '最后更新', // string | boolean
	},
	plugins: [
		[
			'vuepress-plugin-comment',
			{
				choosen: 'valine',
				options: {
					el: '#valine-vuepress-comment',
					appId: 'FwTRWoTSyKuhSXy3qbMD13lC-gzGzoHsz',
					appKey: '52RetgYIRghU7v9sIDrYzYOh',
				},
			},
		],
	],
}
