// const CompressionPlugin = require('compression-webpack-plugin');

module.exports = {
	publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
	// build时放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录
	assetsDir: '',
	// 默认在生成的静态资源文件名中包含hash以控制缓存
	filenameHashing: true,
	devServer: {
		host: '0.0.0.0',
		port: 8080,
		open: true, // 设置自动打开
		// proxy: {
		// 	'/sc-organization': {
		// 		target: 'http://192.168.1.196:1004',  // 请求本地 需要xboot后台项目
		// 		changeOrigin: true, // 是否开启跨域
		// 		// pathRewrite: {
		// 		// 	'^/api': '/api/'// 在请求的时候 凡是/api开头的地址都可以跨域
		// 		// },
		// 		ws: true
		// 	},
		// 	'/sc-service': {
		// 		target: 'http://192.168.1.196:1004',
		// 		changeOrigin: true, // 是否开启跨域
		// 	},
		// 	'/ftp-service': {
		// 		target: 'http://192.168.1.196:1004',
		// 		changeOrigin: true, // 是否开启跨域
		// 	}
		// }
	},
	// css的处理
	// css: {
	// 	// 当为true时，css文件名可省略 module 默认为 false
	// 	modules: true,
	// 	// 是否将组件中的 CSS 提取至一个独立的 CSS 文件中,当作为一个库构建时，你也可以将其设置为 false 免得用户自己导入 CSS
	// 	// 默认生产环境下是 true，开发环境下是 false
	// 	extract: false,
	// 	// 是否为 CSS 开启 source map。设置为 true 之后可能会影响构建的性能
	// 	sourceMap: false,
	// 	//向 CSS 相关的 loader 传递选项(支持 css-loader postcss-loader sass-loader less-loader stylus-loader)
	// 	loaderOptions: {
	// 		css: {},
	// 		less: {}
	// 	}
	// },
	// 打包时不生成.map文件 避免看到源码
	productionSourceMap: false,
	// 部署优化
	configureWebpack: {
		// 使用CDN
		// externals: {
		// 	vue: 'Vue',
		// 	axios: 'axios',
		// 	'vue-router': 'VueRouter',
		// 	vuex: 'Vuex',
		// 	iview: 'iview',
		// 	echarts: 'echarts',
		// 	apexcharts: 'ApexCharts',
		// 	'vue-apexcharts': 'VueApexCharts',
		// 	xlsx: 'XLSX',
		// 	dplayer: 'DPlayer',
		// 	gitalk: 'Gitalk'
		// },
		// GZIP压缩
		// plugins: [
		// 	new CompressionPlugin({
		// 		test: /\.js$|\.html$|\.css/, // 匹配文件
		// 		threshold: 10240 // 对超过10k文件压缩
		// 	})
		// ]
	}
}