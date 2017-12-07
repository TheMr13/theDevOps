const gulp = require('gulp');
const http = require('http');
const connect = require('connect');
const serveStatic = require('serve-static');
const exec = require('child_process').exec;

gulp.task('default', ['start_server', 'connect']);

gulp.task('start_server', function(cb) {
  //some code
  cb();
});

gulp.task('connect', ['start_server'], function(cb) {
  //some code
  cb();
});