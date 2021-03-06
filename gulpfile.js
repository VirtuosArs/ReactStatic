/* Needed gulp config */
'use strict';

//dependencies
var gulp = require('gulp');
var sass = require('gulp-sass');
var minifycss = require('gulp-clean-css');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var changed = require('gulp-changed');

var SCSS_SRC = './src/Assets/scss/**/*.scss';
var SCSS_DEST = './src/Assets/css';

/* Sass task */
gulp.task('compile_scss', function () {
    gulp.src(SCSS_SRC)
        .pipe(sass().on('error', sass.logError))
        .pipe(minifycss())
        .pipe(rename({ suffix: '.min' }))
        .pipe(changed(SCSS_DEST))
        .pipe(gulp.dest(SCSS_DEST));
});


//detect changes in scss
gulp.task('watch-scss', function () {
    gulp.watch(SCSS_SRC, ['compile_scss']);
});


//Run tasks
gulp.task('default', ['watch-scss']);