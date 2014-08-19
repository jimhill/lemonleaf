/* ========================================================================
 * LemonLeaf
 *
 * A quickstart environment for LemonStand theme development 
 * https://github.com/jimhill/lemonleaf
 * ========================================================================
 * Licensed under MIT (https://github.com/jimhill/lemonleaf/blob/master/LICENSE)
 * ======================================================================== */


// Dependencies
// ========================================================================
var fs = require('fs'),
    path = require('path'),
    gulp = require('gulp'),
    gutil = require('gulp-util'),
    rimraf = require('gulp-rimraf'),
    notify = require('gulp-notify'),
    less = require('gulp-less'),
    sass = require('gulp-ruby-sass'),
    jshint = require("gulp-jshint"),
    concat = require("gulp-concat"),
    uglify = require("gulp-uglify"),
    rename = require("gulp-rename"),
    zip = require("gulp-zip");

// Path config
// ========================================================================
var paths = {
        src: path.join(__dirname, 'src'),
        dist: path.join(__dirname, 'dist'),
    },
    srcJs = path.join(paths.src, 'js'),
    srcVendorsJs = path.join(paths.src, 'js', 'vendors/');

// JavaScript files so they are concatenated in the correct order
// ========================================================================
var scripts = [
        path.join(srcJs, 'main.js'),
    ],
    vendorScripts = [
        path.join(srcVendorsJs, 'example.js'),
    ];


// Tasks
// ========================================================================


/**
 * flush
 *
 * @see https://github.com/jimhill/lemonleaf/blob/master/README.md#flush
 */
gulp.task('flush', function(cb) {
    return gulp.src([
            path.join(paths.dist, 'theme' + '/pages/*'),
            path.join(paths.dist, 'theme' + '/partials/*'),
            path.join(paths.dist, 'theme' + '/resources/*'),
            path.join(paths.dist, 'theme' + '/templates/*'),
            path.join(paths.dist, 'theme' + '/README.md'),
            path.join(paths.dist, 'theme' + '/theme.yaml')
        ],{ read: false})
        .pipe(rimraf( { } ));
});


/**
 * min-styles-less
 *
 * @see https://github.com/jimhill/lemonleaf/blob/master/README.md#min-styles-less
 */
gulp.task('min-styles-less', function() {
    return gulp.src( path.join(paths.src, 'less', 'main.less') )
        .pipe(less({
            compress: true,
        }).on('error', gutil.log))
        .pipe(rename('main.min.css'))
        .pipe(gulp.dest( path.join(paths.dist, 'theme', 'resources', 'css') ))
        .pipe(notify('Less compiled'));
});


/**
 * min-styles-sass
 *
 * @see https://github.com/jimhill/lemonleaf/blob/master/README.md#min-styles-sass
 */
gulp.task('min-styles-sass', function() {
    return gulp.src( path.join(paths.src, 'scss', 'main.scss') )
        .pipe(sass({
            style: 'compressed'
        }).on('error', gutil.log))
        .pipe(rename('main.css'))
        .pipe(gulp.dest( path.join(paths.dist, 'theme', 'resources', 'css') ))
        .pipe(notify('Sass compiled'));
});


/**
 * min-styles
 *
 * @see https://github.com/jimhill/lemonleaf/blob/master/README.md#min-styles
 */
gulp.task('min-styles', ['min-styles-less']);
//gulp.task('min-styles', ['min-styles-sass']);


/**
 * min-scripts-js
 *
 * @see https://github.com/jimhill/lemonleaf/blob/master/README.md#min-scripts-js
 */
gulp.task('min-scripts-js', function() {
    return gulp.src(scripts)
        .pipe(jshint())
        .pipe(jshint.reporter("default"))
        .pipe(concat('main.js'))
        .pipe(uglify())
        .pipe(rename('main.min.js'))
        .pipe(gulp.dest( path.join(paths.dist, 'theme', 'resources', 'js') ))
        .pipe(notify('JS compiled and compressed for distribution'));
});

/**
 * min-vendor-scripts-js
 *
 * @see https://github.com/jimhill/lemonleaf/blob/master/README.md#min-vendor-scripts-js
 */
gulp.task('min-vendor-scripts-js', function() {
    return gulp.src(vendorScripts)
        .pipe(jshint())
        .pipe(jshint.reporter("default"))
        .pipe(concat('vendors.js'))
        .pipe(uglify())
        .pipe(rename('vendors.min.js'))
        .pipe(gulp.dest( path.join(paths.dist, 'theme', 'resources', 'js') ))
        .pipe(notify('Vendors JS compiled and compressed for distribution'));
});


/**
 * min-scripts
 *
 * @see https://github.com/jimhill/lemonleaf/blob/master/README.md#min-scripts
 */
gulp.task('min-scripts', ['min-scripts-js', 'min-vendor-scripts-js']);


/**
 * build
 *
 * @see https://github.com/jimhill/lemonleaf/blob/master/README.md#build
 */
gulp.task('build', ['min-styles', 'min-scripts'], function() {
    // Resource files first
    gulp.src([
            path.join(paths.src, '**', '*'),
            '!' + path.join(paths.src, 'js'),
            '!' + path.join(paths.src, 'scss'),
            '!' + path.join(paths.src, 'less'),
            '!' + path.join(paths.src, 'twig'),
            '!' + path.join(paths.src, 'README.md'),
            '!' + path.join(paths.src, 'theme.yaml')
        ])
        .pipe(gulp.dest(path.join(paths.dist, 'theme', 'resources')))
        .pipe(notify('Resources moved for distribution'));

    // Twig files
    gulp.src([
            path.join(paths.src, 'twig', '**', '*.htm')
        ])
        .pipe(gulp.dest(path.join(paths.dist, 'theme')))
        .pipe(notify('Twig files moved for distribution'));

    // Finally config files
    return gulp.src([
            path.join(paths.src, 'README.md'),
            path.join(paths.src, 'theme.yaml')
        ])
        .pipe(gulp.dest(path.join(paths.dist, 'theme')))
        .pipe(notify('Config and README moved for distribution'));
});


/**
 * zip
 *
 * @see https://github.com/jimhill/lemonleaf/blob/master/README.md#zip
 */
gulp.task('zip', function() {

    return gulp.src([
            path.join(paths.dist, 'theme', '**', '*'),
            path.join(paths.dist, 'theme', '**', '.*')
        ])
        .pipe(zip('theme.zip').on('error', gutil.log))
        .pipe(gulp.dest( paths.dist ))
        .pipe(notify('Theme zipped'));
});


/**
 * watch
 *
 * @see https://github.com/jimhill/lemonleaf/blob/master/README.md#watch
 */
gulp.task('watch', ['min-styles', 'min-scripts']);


/**
 * default
 *
 * @see https://github.com/jimhill/lemonleaf/blob/master/README.md#default
 */
gulp.task('default', ['watch']);
