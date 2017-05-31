var gulp = require('gulp');
var plugins = require('gulp-load-plugins')({camelize: true});
var config = require('../config');
var handleErrors = require('../util/handleErrors');

gulp.task('deploy', ['build'], function() {
    return gulp.src(config.dist + '**/*')
        .pipe(plugins.ghPages())
        .on('error', handleErrors)
        .pipe(plugins.debug({title: 'deploy:'}));
});
