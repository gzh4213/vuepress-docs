const dataSide = require('./sidebars/data')
const vueSide = require('./sidebars/vue')
const testSide = require('./sidebars/test')
const tutorialSide = require('./sidebars/tutorial')
const devSide = require('./sidebars/dev-helper')

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
					{ text: '开发辅助', link: '/dev-helper/' },
					{ text: 'vuepresss', link: '/vuepresss/' },
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
			'/data/': dataSide,
			'/frontend/vue/': vueSide,
			'/test/jest/': testSide,
			'/tutorial/': tutorialSide,
			'/dev-helper/': devSide,
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
