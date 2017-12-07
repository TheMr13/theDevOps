const gulp = require('gulp');

gulp.task('default', ['start_server', 'connect']);

gulp.task('start_server', function(cb) {
  //some code
  cb();
});

gulp.task('connect', ['start_server'], function(cb) {
  //some code
  cb();
});