'use strict';

// Necessary Plugins
var gulp        = require('gulp')
    ,paths      = require('../paths')
    ,typescript = require('gulp-typescript')
    ,sourcemaps = require('gulp-sourcemaps');

// Call Typescript Compiler
module.exports = gulp.task('ts', function () {
  return gulp.src(paths.source.ts)
    .pipe(sourcemaps.init())
    .pipe(typescript({
      noImplicitAny:false,
      sortOutput: true,
      typescript: require('typescript')
    }))
    .pipe(sourcemaps.write('paths.build.sourceMaps'))
    .pipe(gulp.dest('paths.build.html'));
});
