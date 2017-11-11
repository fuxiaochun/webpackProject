
const webpack = require('webpack');
const webpackDevServer = require('webpack-dev-server');
const baseConfig = require('./webpack/webpack.config.js');

const compiler = webpack(baseConfig);
const server = new webpackDevServer(compiler, {
	//
	hot: false,
	compress: true
});

server.listen(8080,'localhost',()=>{
	console.log('服务启动在http://localhost:8080');
});