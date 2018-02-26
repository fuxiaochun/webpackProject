const webpack = require('webpack');
const fs = require('fs');
const path = require('path');
const paths = require('./path.js');
const entrys = require('./entrys.js');

module.exports = {
	entry:entrys,
	output: {
		path: paths.dist,
		filename: 'js/[name].js'
	},
	module:{
		rules:[
			{
				test: /.scss$/,
				use: ['style-loader','css-loader','sass-loader']
			},
			{
				test: /.jsx?$/,
				use: 'babel-loader'
			}
		],
	}
};
