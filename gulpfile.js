var gulp = require('gulp'),
	browserify = require('browserify'),
	source = require("vinyl-source-stream"),
	reactify = require('reactify');

gulp.task('default', function(){
  var b = browserify();
  b.transform(reactify);
  b.add('./src/main.js');
  return b.bundle()
    .pipe(source('main.js'))
    .pipe(gulp.dest('./dist'));
});