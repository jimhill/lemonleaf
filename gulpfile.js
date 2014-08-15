// Libraries
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

// Development Sass
gulp.task('dev-sass', function() {
    return gulp.src(srcSassDir + '/main.scss')
        .pipe(sass().on('error', gutil.log))
        .pipe(rename('main.css'))
        .pipe(gulp.dest(srcCssDir))
        .pipe(notify('Sass compiled'));
});

// Development Javascript
// TODO

// Build Sass and CSS
gulp.task('build-sass', function() {
    return gulp.src(srcSassDir + '/main.scss')
        .pipe(sass({
            style: 'compressed'
        }).on('error', gutil.log))
        .pipe(gzip())
        .pipe(rename('master.min.css'))
        .pipe(gulp.dest(distCssDir))
        .pipe(notify('Sass compiled and compressed for distribution'));
});

// Build: Concatenate & Minify JS
gulp.task('build-js', function() {
    gulp.src([srcJsDir + '/plugins.min.js'])
        .pipe(gzip())
        .pipe(rename(function(path) {
            path.extname = ""
        }))
        .pipe(gulp.dest(distJsDir));

    return gulp.src([srcJsDir + '/*.js', '!' + srcJsDir + '/plugins.min.js'])
        .pipe(jshint())
        .pipe(jshint.reporter("default"))
        .pipe(concat('master.min.js'))
        .pipe(uglify())
        .pipe(gzip())
        .pipe(rename('master.min.js'))
        .pipe(gulp.dest(distJsDir))
        .pipe(notify('JS compiled and compressed for distribution'));
});

// Build tasks
gulp.task('build', ['build-sass', 'build-js', 'build-fonts', 'build-images']);

// Watch tasks
gulp.task('watch', function() {
    gulp.watch(srcSassDir + '/**/*.scss', ['dev-sass']);
});

// Default task
gulp.task('default', ['watch']);