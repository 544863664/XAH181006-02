module.exports = {
	lintOnSave: false,
	productionSourceMap: false,
	devServer: {
		// proxy: 'http://157.122.54.189:9088',
		// proxy: {
		// 	'/search': { // search为转发路径
		// 		target: 'http://157.122.54.189:9088', // 目标地址
		// 		ws: true, // 是否代理websockets
		// 		changeOrigin: true ,// 设置同源 默认false，是否需要改变原始主机头为目标URL, 
		// 		pathRewrite: {
		// 			'^/search': '/'
		// 		}
		// 	}
		// }
	},
	publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
	configureWebpack: {
		externals: [
			require('webpack-require-http')
		],
	}
};
