'use strict';

var gulp = require('gulp');

// Default task
module.exports = gulp.task('default', ['ts', 'sass', 'jade', 'watch']);
