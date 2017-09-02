var gulp = require('gulp');
var plugins = require('gulp-load-plugins')({camelize: true});
var config = require('../config');
var handleErrors = require('../util/handleErrors');

gulp.task('webserver', function() {
  return gulp.src(config.dist)
    .pipe(plugins.webserver({
      port: config.dev.port
    }))
    .on('error', handleErrors)
    .pipe(plugins.debug({title: 'webserver:'}));
});
