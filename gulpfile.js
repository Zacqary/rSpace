var gulp = require('gulp');
var app = require('./app');
var connectLR = require('connect-livereload');
var livereload = require('gulp-livereload');
var lr = require('tiny-lr')();

var EXPRESS_PORT = 3000;
var LIVERELOAD_PORT = 35729;

gulp.task('default', ['watch']);

gulp.task('watch', function(){
	app.use(connectLR());
	app.listen(EXPRESS_PORT);

	lr.listen(LIVERELOAD_PORT);

	gulp.watch('views/*.ejs', notifyReload);

});

var notifyReload = function(event){
	console.log(event.path);
	gulp.src(event.path, {read: false})
		.pipe(livereload(lr));
};