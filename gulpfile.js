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
var gulp = require('gulp');
var gutil = require('gulp-util');
var notify = require('gulp-notify');
var sass = require('gulp-ruby-sass');
var jshint = require("gulp-jshint");
var concat = require("gulp-concat");
var uglify = require("gulp-uglify");
var rename = require("gulp-rename");
var gzip = require("gulp-gzip");


// Variables
// ========================================================================
var srcSassDir = './app/assets/src/sass';
var srcCssDir = './app/assets/src/css';
var srcJsDir = './app/assets/src/js';
var srcFontsDir = './app/assets/src/fonts';
var srcImagesDir = './app/assets/src/img';
var distDir = './app/assets/dist/';
var distCssDir = './app/assets/dist/css';
var distJsDir = './app/assets/dist/js';
var distFontsDir = './app/assets/dist/fonts';
var distImagesDir = './app/assets/dist/img';


// Tasks
// ========================================================================


/**
 * min-styles
 *
 * @see https://github.com/jimhill/lemonleaf/blob/master/README.md#min-styles
 */
gulp.task('min-styles', function() {
    
});


/**
 * min-styles-less
 *
 * @see https://github.com/jimhill/lemonleaf/blob/master/README.md#min-styles-less
 */
gulp.task('min-styles-less', function() {
    
});


/**
 * min-styles-sass
 *
 * @see https://github.com/jimhill/lemonleaf/blob/master/README.md#min-styles-sass
 */
gulp.task('min-styles-sass', function() {
    
});


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
