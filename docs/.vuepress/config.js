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
			{
				text: '前端',
				items: [
					{
						text: '原生js',
						link: '/frontend/js/'
					},
					{ text: 'Vue', link: '/frontend/vue/' },
					{ text: 'React', link: '/frontend/react/' },
					{ text: 'typesript', link: '/ts/'},
					{ text: 'npm', link: '/npm/' },
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
			{
				text: 'GitHub',
				link: 'https://github.com/gzh4213',
				target: '_blank',
				rel: 'noopener noreferrer',
			},
		],
		sidebarDepth: 4,
		sidebar: {
			// 侧边栏设置
			'/data/': require('./sidebars/data'),
			'/frontend/vue/': require('./sidebars/vue'),
			'/test/jest/': require('./sidebars/test'),
			'/tutorial/': require('./sidebars/tutorial'),
			'/vuepress/': require('./sidebars/vuepress'),
			'/rollup/': require('./sidebars/rollup'),
			'/interview/': require('./sidebars/interview'),
			'/frontend/js/': require('./sidebars/js'),
			'/ts/': require('./sidebars/ts'),
			'/webpack/': require('./sidebars/webpack'),
			'/PM2/': require('./sidebars/pm2'),
			'/Linux/': require('./sidebars/linux'),
			'/Nginx/': require('./sidebars/nginx'),

		},
		search: true,
		searchMaxSuggestions: 10,
		lastUpdated: '最后更新', // string | boolean
	},
	plugins: [
		['@vuepress/back-to-top'],
		// [
		// 	'@vuepress/blog',
		// 	{
		// 		/* options */
		// 	},
		// ],
		// [
		// 	'vuepress-plugin-comment',
		// 	{
		// 		choosen: 'valine',
		// 		options: {
		// 			el: '#valine-vuepress-comment',
		// 			appId: 'FwTRWoTSyKuhSXy3qbMD13lC-gzGzoHsz',
		// 			appKey: '52RetgYIRghU7v9sIDrYzYOh',
		// 		},
		// 	},
		// ],
	]
}
