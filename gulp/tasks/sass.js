'use strict';

// Necessary Plugins
var gulp       = require('gulp')
    ,plumber   = require('gulp-plumber')
    ,paths     = require('../paths')
    ,sass      = require('gulp-sass')
    ,minifyCss = require('gulp-minify-css')
    ,rename    = require('gulp-rename');

// Call Sass
module.exports = gulp.task('sass', function () {
  return gulp.src(paths.source.files.sass)
    .pipe(plumber())
    .pipe(sass({
      errLogToConsole: true
    }))
    .pipe(gulp.dest(paths.build.css))
    .pipe(minifyCss({
      keepSpecialComments: 0
    }))
    .pipe(rename({ extname: '.min.css' }))
    .pipe(gulp.dest(paths.build.css));
});
