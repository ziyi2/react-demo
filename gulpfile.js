
//Gulp_8
// var gulp = require('gulp');
// var react = require('gulp-react');

// gulp.task('jsx', function(){
// 	gulp.src('./Gulp_8/app.jsx')
// 		.pipe(react())
// 		.pipe(gulp.dest('./Gulp_8/'));
// });

// //设置默认命令
// gulp.task('default',['jsx']);

//Browserify_9
var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var reactify = require('reactify');

gulp.task('jsx', function(){
	browserify({
		entries: ['./Browserify_9/app.jsx'],
		transform: [reactify]  	//把.jsx转化为.js	
	})
		.bundle() 				//生成一个.js
		.pipe(source())			//把browserify的输出转化为gulp可以理解的输入
		.pipe(gulp.dest('./Browserify_9/'));
});

//设置默认命令
gulp.task('default',['jsx']);