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
var fs = require('fs');
var path = require('path');
var gulp = require('gulp');
var gutil = require('gulp-util');
var notify = require('gulp-notify');
var less = require('gulp-less');
var sass = require('gulp-ruby-sass');
var jshint = require("gulp-jshint");
var concat = require("gulp-concat");
var uglify = require("gulp-uglify");
var rename = require("gulp-rename");
var gzip = require("gulp-gzip");


// Config
// ========================================================================
var paths = {
    src: './src',
    dist: './dist'
};


// Tasks
// ========================================================================


/**
 * min-styles-less
 *
 * @see https://github.com/jimhill/lemonleaf/blob/master/README.md#min-styles-less
 */
gulp.task('min-styles-less', function() {
    return gulp.src(paths.src + '/less/main.less')
        .pipe(less({
            paths: [ path.join(__dirname, 'less', 'includes') ]
        }).on('error', gutil.log))
        .pipe(rename('main.css'))
        .pipe(gulp.dest(paths.dist + '/theme/resources/css'))
        .pipe(notify('Sass compiled'));
});


/**
 * min-styles-sass
 *
 * @see https://github.com/jimhill/lemonleaf/blob/master/README.md#min-styles-sass
 */
gulp.task('min-styles-sass', function() {
    return gulp.src(paths.src + '/scss/main.scss')
        .pipe(sass().on('error', gutil.log))
        .pipe(rename('main.css'))
        .pipe(gulp.dest(paths.dist + '/theme/resources/css'))
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
 * min-scripts
 *
 * @see https://github.com/jimhill/lemonleaf/blob/master/README.md#min-scripts
 */
gulp.task('min-scripts', function() {
    
});


/**
 * min-scripts-js
 *
 * @see https://github.com/jimhill/lemonleaf/blob/master/README.md#min-scripts-js
 */
gulp.task('min-scripts-js', function() {
    
});


/**
 * lemonsync-config
 *
 * @see https://github.com/jimhill/lemonleaf/blob/master/README.md#lemonsync-config
 */
gulp.task('lemonsync-config', function() {
    
});


/**
 * zip
 *
 * @see https://github.com/jimhill/lemonleaf/blob/master/README.md#zip
 */
gulp.task('zip', function() {
    
});


/**
 * watch
 *
 * @see https://github.com/jimhill/lemonleaf/blob/master/README.md#watch
 */
gulp.task('watch', function() {
    
});


/**
 * default
 *
 * @see https://github.com/jimhill/lemonleaf/blob/master/README.md#default
 */
gulp.task('default', ['watch']);
