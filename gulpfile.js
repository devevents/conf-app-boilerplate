var gulp = require('gulp');
var gutil = require('gulp-util');
var bower = require('bower');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');
var sh = require('shelljs');
var notify = require('gulp-notify');
var growl = require('gulp-notify-growl');
var jscs = require('gulp-jscs');
var jshint = require('gulp-jshint');

var paths = {
  sass: ['./scss/**/*.scss'],
  lint: ['./www/app/**/*.js'],
};

gulp.task('default', ['lint', 'sass']);

gulp.task('lint', ['jshint', 'jscs']);

gulp.task('jscs', function () {
  gulp.src('js/*.js')
    .pipe(jscs())
    .pipe(notify({
      title: 'JSCS',
      message: 'JSCS Passed.'
    }));
});

gulp.task('jshint', function () {
  gulp.src('js/*.js')
    .pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter('jshint-stylish'))
    .pipe(jshint.reporter('fail'))
    .pipe(notify({
      title: 'JSHint',
      message: 'JSHint Passed.',
    }));
});

gulp.task('sass', function(done) {
  gulp.src('./scss/ionic.app.scss')
    .pipe(sass({
      errLogToConsole: true
    }))
    .pipe(gulp.dest('./www/assets/css/'))
    .pipe(minifyCss({
      keepSpecialComments: 0
    }))
    .pipe(rename({ extname: '.min.css' }))
    .pipe(gulp.dest('./www/assets/css/'))
    .on('end', done);
});

gulp.task('watch', function() {
  gulp.watch(paths.sass, ['sass']);
  gulp.watch(paths.lint, ['lint']);
});

gulp.task('install', ['git-check'], function() {
  return bower.commands.install()
    .on('log', function(data) {
      gutil.log('bower', gutil.colors.cyan(data.id), data.message);
    });
});

gulp.task('git-check', function(done) {
  if (!sh.which('git')) {
    console.log(
      '  ' + gutil.colors.red('Git is not installed.'),
      '\n  Git, the version control system, is required to download Ionic.',
      '\n  Download git here:', gutil.colors.cyan('http://git-scm.com/downloads') + '.',
      '\n  Once git is installed, run \'' + gutil.colors.cyan('gulp install') + '\' again.'
    );
    process.exit(1);
  }
  done();
});
