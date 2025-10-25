import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
	title: "ITG Tech Guide",
	description: "A VitePress Site",
	srcDir: 'src',
	themeConfig: {
		// https://vitepress.dev/reference/default-theme-config
		nav: [
			{ text: 'Home', link: '/' },
			{ text: 'Notation', link: '/tech/notation' }
		],

		sidebar: [
			{
				text: 'Tech',
				items: [
					{ text: 'Notation', link: '/tech/notation' },
					{ text: 'Patterns', link: '/tech/patterns' },
					{ text: 'Egg Carton', link: '/tech/eggcartonedit' },
				]
			}
		],

		socialLinks: [
			{ icon: 'github', link: 'https://github.com/Yuiko911/itgtechguide' }
		],
	}
})
