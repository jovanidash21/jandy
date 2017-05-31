var gulp = require('gulp');
var plugins = require('gulp-load-plugins')({camelize: true});
var config = require('../config');
var handleErrors = require('../util/handleErrors');

gulp.task('webserver', function() {
    return gulp.src(config.dist)
        .pipe(plugins.webserver({
            livereload: true,
            port: 9000
        }))
        .on('error', handleErrors)
        .pipe(plugins.debug({title: 'webserver:'}));
});
