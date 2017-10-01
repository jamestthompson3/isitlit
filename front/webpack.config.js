"use strict"

const webpack = require('webpack')
const CompressionPlugin = require('compression-webpack-plugin')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const OfflinePlugin = require('offline-plugin')
const path = require('path')
const appPath = path.join(__dirname, './src')
const distPath = path.join(__dirname, './src/dist')
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
	template: appPath + '/index.html',
	inject:true
})

module.exports = {
	context: appPath,
	entry:{
		js: './index',
		vendor:[
			'react',
			'react-dom',
			'lodash',
			// 'moment'
		]
	},
	output: {
		path: distPath,
		filename:'main.js'
	},
	plugins: [
		new CompressionPlugin({
			asset: "[path].gz[query]",
			algorithm: "gzip",
			test: /\.js$|\.css$|.html$/,
			threshold: 10240,
			minRatio: 0.8
		}),
		new webpack.HotModuleReplacementPlugin(),
		HtmlWebpackPluginConfig,
		// new OfflinePlugin({
		// 	relativePaths: false,
		// 	AppCache: true,
		// 	excludes: ['_redirects'],
		// 	ServiceWorker: {
		// 		events:true
		// 	},
		// 	cacheMaps: [
		// 		{
		// 			match: /.*/,
		// 			to: '/',
		// 			requestTypes: ['navigate']
		// 		}
		// 	],
		// 	publicPath:'/'
		// }),
		new webpack.optimize.CommonsChunkPlugin({
			name:'vendor',
			minChunks: Infinity,
			filename:'vendor.bundle.js'
		})
	],
	module: {
		loaders:[
			{ test: /\.js$/, loader:'babel-loader', exclude: /node_modules/ },
			{ test: /\.jsx$/, loader:'babel-loader',exclude: /node_modules/ }
		]
	}
}