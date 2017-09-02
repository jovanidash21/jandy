var gulp = require('gulp');
var plugins = require('gulp-load-plugins')({camelize: true});
var fs = require('fs');
var FAVICON_DATA_FILE = 'faviconData.json';
var handleErrors = require('../util/handleErrors');

gulp.task('favicon:generate', function(done) {
	plugins.realFavicon.generateFavicon({
		masterPicture: './dist/images/jandy-logo.svg',
		dest: './dist/favicons',
		iconsPath: './favicons/',
		design: {
			ios: {
				pictureAspect: 'noChange',
				assets: {
					ios6AndPriorIcons: false,
					ios7AndLaterIcons: false,
					precomposedIcons: false,
					declareOnlyDefaultIcon: true
				}
			},
			desktopBrowser: {},
			windows: {
				pictureAspect: 'noChange',
				backgroundColor: '#212121',
				onConflict: 'override',
				assets: {
					windows80Ie10Tile: false,
					windows10Ie11EdgeTiles: {
						small: false,
						medium: true,
						big: false,
						rectangle: false
					}
				}
			},
			androidChrome: {
				pictureAspect: 'noChange',
				themeColor: '#ffffff',
				manifest: {
					display: 'standalone',
					orientation: 'notSet',
					onConflict: 'override',
					declared: true
				},
				assets: {
					legacyIcon: false,
					lowResolutionIcons: false
				}
			},
			safariPinnedTab: {
				pictureAspect: 'silhouette',
				themeColor: '#5bbad5'
			}
		},
		settings: {
			scalingAlgorithm: 'Mitchell',
			errorOnImageTooSmall: false
		},
		markupFile: FAVICON_DATA_FILE
	}, function() {
		done();
	});
});

gulp.task('favicon:inject', ['favicon:generate'], function() {
	return gulp.src([ 'dist/*.html' ])
		.pipe(plugins.realFavicon.injectFaviconMarkups(
			JSON.parse(fs.readFileSync(FAVICON_DATA_FILE))
			.favicon.html_code))
    .on('error', handleErrors)
    .pipe(plugins.debug({title: 'favicon:'}))
		.pipe(gulp.dest('dist'));
});

gulp.task('favicon:update', function(done) {
	var currentVersion = JSON.parse(fs.readFileSync(FAVICON_DATA_FILE)).version;
	plugins.realFavicon.checkForUpdates(currentVersion, function(err) {
		if (err) {
			throw err;
		}
	});
});
