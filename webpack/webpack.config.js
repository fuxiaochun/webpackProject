const webpack = require('webpack');
const fs = require('fs');
const path = require('path');
const paths = require('./path.js');
const entrys = require('./entrys.js');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports={
	entry:entrys,
	output: {
		path: path.dist,
		filename: 'js/[name].js'
	},
	module:{
		rules:[
			{
				test: /.scss$/,
				use: ['style-loader','css-loader','sass-loader']
			},
			{
				test: /.js$/,
				use: 'babel-loader'
			}
		],
	}
};
