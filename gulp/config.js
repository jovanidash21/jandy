var argv = require('yargs').argv;
var argvProduction = argv.production;
var browserSync = require('browser-sync');
var gulp = require('gulp');
var plugins = require('gulp-load-plugins')({camelize: true});
var lazypipe = require('lazypipe');
var manifest = require('asset-builder')('./assets/manifest.json');
var path = manifest.paths;
var assets = path.source;
var dist = path.dist;
var config = manifest.config || {};
var globs = manifest.globs;
var project = manifest.getProjectGlobs();
var revManifest = dist + 'assets.json';

var writeToManifest = function(directory) {
    return lazypipe()
        .pipe(gulp.dest, dist + directory)
        .pipe(function() {
            return plugins.if('**/*.{js,css}', browserSync.reload({stream:true}));
        })
        .pipe(plugins.rev.manifest, revManifest, {
            base: dist,
            merge: true
        })
        .pipe(gulp.dest, dist)();
};

module.exports = {
    devUrl: config.devUrl,
    enabled: {
        maps: false,
        failStylesTask: argvProduction,
        failJSHintTask: argvProduction,
        stripJSDebug: argvProduction
    },
    manifest: manifest,
    assets: assets,
    dist: dist,
    writeToManifest: writeToManifest,
    views: {
        src: assets + 'views/*.pug',
        dest: dist
    },
    styles: {
        settings: {
            outputStyle: 'nested',
            precision: 10,
            includePaths: ['.'],
            errLogToConsole: !argvProduction
        },
        proj: project.css,
        src: assets + 'styles',
        dest: dist + 'styles'
    },
    scripts: {
        proj: project.js,
        src: assets + 'scripts',
        dest: dist + 'scripts'
    },
    fonts: {
        globs: globs.fonts,
        src: assets + 'fonts',
        dest: dist + 'fonts'
    },
    images: {
        settings: {
            interlaced: true,
            optimizationLevel: 5,
            progressive: true,
            svgoPlugins: [{removeUnknownsAndDefaults: false}]
        },
        globs: globs.images,
        src: assets + 'images',
        dest: dist + 'images'
    }
};
