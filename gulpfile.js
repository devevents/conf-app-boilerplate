var gulp = require('gulp');
var gutil = require('gulp-util');
var bower = require('bower');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var jade = require('gulp-jade');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');
var sh = require('shelljs');
var notify = require('gulp-notify');
var growl = require('gulp-notify-growl');
var jscs = require('gulp-jscs');
var jshint = require('gulp-jshint');

var paths = {
  jade: ['./src/**/*.jade'],
  sass: ['./src/**/*.scss'],
  js: ['./www/app/**/*.js', './assets/lib/**/*.js'],
};

gulp.task('default', ['lint', 'sass', 'jade']);

gulp.task('lint', ['jshint', 'jscs']);

gulp.task('jscs', function () {
  gulp.src(paths.js)
    .pipe(jscs())
    .pipe(notify({
      title: 'JSCS',
      message: 'JSCS Passed.'
    }));
});

gulp.task('jshint', function () {
  gulp.src(paths.js)
    .pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter('jshint-stylish'))
    .pipe(jshint.reporter('fail'))
    .pipe(notify({
      title: 'JSHint',
      message: 'JSHint Passed.',
    }));
});

gulp.task('sass', function(done) {
  gulp.src('./src/styles.scss')
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

gulp.task('jade', function() {
  return gulp.src(paths.jade)
    .pipe(jade({pretty: true}))
    .pipe(gulp.dest('./www/'));
});

gulp.task('watch', function() {
  gulp.watch(paths.js, ['lint']);
  gulp.watch(paths.jade, ['jade']);
  gulp.watch(paths.sass, ['sass']);

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
