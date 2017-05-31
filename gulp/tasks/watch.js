var gulp = require('gulp');
var config = require('../config');
var browserSync = require('browser-sync').create();

gulp.task('watch', ['webserver'], function () {
    browserSync.init({
        files: ['{dist}/**/*.html', '*.html'],
        proxy: config.devUrl
    });
    gulp.watch([config.assets + 'views/**/*'], ['views']);
    gulp.watch([config.assets + 'styles/**/*'], ['styles']);
    gulp.watch([config.assets + 'scripts/**/*'], ['jshint', 'scripts']);
    gulp.watch([config.assets + 'images/**/*'], ['images']);
    gulp.watch([config.assets + 'fonts/**/*'], ['fonts']);
    gulp.watch(['bower.json', 'assets/manifest.json'], ['build']);
});
