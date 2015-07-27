'use strict';

// Necessary Plugins
var gulp     = require('gulp')
    ,paths   = require('../paths')
    ,jade    = require('gulp-jade');

// Call Jade to compile Templates
module.exports = gulp.task('jade', function () {
  return gulp.src(paths.source.jade)
    .pipe(jade({pretty: true }))
    // TODO: use templatecache
    //.pipe(html2Ts())
    .pipe(gulp.dest(paths.build.html))
});
