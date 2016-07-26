'use strict';

var webpack = require('webpack');
//var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');

/*1.Webpack_10*/

// module.exports = {
// 	entry: './Webpack_10/app.jsx',
// 	output: {
// 		path: './Webpack_10/',
// 		filename: 'app.js'
// 	},
// 	module:{
// 		loaders: [
// 			{
// 				test: /\.jsx$/,
// 				loader: 'jsx-loader'
// 			}
// 		]	
// 	}
// }

/*2.Todolist_11*/
module.exports = {
	entry: './Todolist_11/src/entry.js',
	output: {
		path: './Todolist_11/dist/',
		filename: 'app.js'
	},

	externals: {
		'react-dom': 'ReactDOM',
		'react': 'React' //遇到require('react')不去处理并且默认为全局的React变量,这样可以在index.html中使用src属性加载react.js
	},

	module: {
		loaders: [
			 { 
			 	test: /\.js$/, 
			 	loader: "jsx!babel", 
			 	include: /src/
			 }
		]		
	}
}






