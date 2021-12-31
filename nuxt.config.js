export default {
	// Global page headers: https://go.nuxtjs.dev/config-head
	head: {
		title: 'alkhimch',
		htmlAttrs: {
			lang: 'en',
		},
		meta: [
			{
				name: 'keywords',
				content: 'Шинэнбаяр, Shinenbayar, alkhimch, shinenbayar, шинэнбаяр',
			},
			{ name: 'author', content: 'Alkhimch' },
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: '' },
			{ name: 'format-detection', content: 'telephone=no' },
		],
		link: [
			{ rel: 'icon', type: 'image/x-icon', href: '/favc.png' },
			{
				rel: 'stylesheet',
				href: 'https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@600&display=swap',
			},
		],
	},

	// Global CSS: https://go.nuxtjs.dev/config-css
	css: ['~/assets/scss/app.scss'],

	// Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
	plugins: [],

	// Auto import components: https://go.nuxtjs.dev/config-components
	components: true,

	// Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
	buildModules: [],

	// Modules: https://go.nuxtjs.dev/config-modules
	modules: [
		// https://go.nuxtjs.dev/bootstrap
		'bootstrap-vue/nuxt',
	],

	// Build Configuration: https://go.nuxtjs.dev/config-build
	build: {},
}
