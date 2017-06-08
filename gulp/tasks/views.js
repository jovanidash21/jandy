var gulp = require('gulp');
var plugins = require('gulp-load-plugins')({camelize: true});
var config = require('../config');
var handleErrors = require('../util/handleErrors');

gulp.task('views', function buildHTML() {
    return gulp.src(config.views.src)
        .pipe(plugins.pug(plugins.if(!config.enabled.production, {pretty: true})))
        .on('error', handleErrors)
        .pipe(plugins.debug({title: 'views:'}))
    .pipe(gulp.dest(config.views.dest));
});
