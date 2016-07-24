'use strict';

var webpack = require('webpack');

module.exports = {
	entry: './Webpack_10/app.jsx',
	output: {
		path: './Webpack_10/',
		filename: 'app.js'
	},
	module:{
		loaders: [
			{
				test: /\.jsx$/,
				loader: 'jsx-loader'
			}
		]	
	}
}