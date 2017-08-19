var gulp = require('gulp');
var runSequence = require('run-sequence');

gulp.task('build', function (callback) {
  runSequence(
    'views',
    'styles',
    'scripts',
    ['fonts', 'images'],
    callback
  );
});
