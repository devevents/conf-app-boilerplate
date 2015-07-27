'use strict';

// Necessary Plugins
var gulp     = require('gulp')
    ,gutil   = require('gulp-util')
    ,paths   = require('../paths')
    ,bower   = require('bower');

//
module.exports = gulp.task('install', ['git-check', 'tsd-install'], function () {
  return bower.commands.install()
    .on('log', function (data) {
    gutil.log('bower', gutil.colors.cyan(data.id), data.message);
  });
});
