const webpack = require('webpack');
const fs = require('fs');
const path = require('path');
const paths = require('./path.js');
const entrys = require('./entrys.js');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	entry:entrys,
	output: {
		path: paths.dist,
		filename: 'js/[name].js'
	},
	resolve: {
		extensions: ['.js', '.jsx'],
		alias: {
			'page': paths.page,
			'io': paths.io,
			'component': paths.component,
			'js': paths.js,
			'css': paths.css,
			'vendor': paths.vendor,
			'util': paths.util
		}
	},
	module:{
		rules:[
			{
				test: /.scss$/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: ['css-loader', 'sass-loader']
				})
			},
			{
				test: /.jsx?$/,
				use: 'babel-loader',
				exclude: /node_modules/
			}
		]
	},
	plugins: [
		new ExtractTextPlugin('css/[name].css')
	]
};
