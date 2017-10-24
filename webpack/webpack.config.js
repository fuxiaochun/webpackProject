const webpack = require('webpack');
const fs = require('fs');
const path = require('path');
const paths = require('./path.js');
const entrys = require('./entrys.js');

module.exports={
	entry:entrys,
	output: {
		path: path.dist,
		filename: 'js/[name].js'
	},
	module:{

	}
};