
const webpack = require('webpack');
const webpackDevServer = require('webpack-dev-server');
const baseConfig = require('./webpack/webpack.config.js');

const compiler = webpack(baseConfig);
const server = new WebpackDevServer(compiler, {
	//
});