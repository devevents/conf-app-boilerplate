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
var typescript = require('gulp-typescript');
var sourcemaps = require('gulp-sourcemaps');
var html2Ts = require('gulp-html-to-ts');

var path = require('path');
var tsd = require('tsd');
var tsdApi = new tsd.getAPI('tsd.json');

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

gulp.task('sass', function (done) {
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

gulp.task('jade', function () {
  return gulp.src([paths.jade])
    .pipe(jade({ pretty: true }))
    .pipe(html2Ts())
    .pipe(gulp.dest('./www/'));
});

gulp.task('watch', function () {
  gulp.watch(paths.js, ['lint']);
  gulp.watch(paths.jade, ['jade']);
  gulp.watch(paths.sass, ['sass']);

});

gulp.task('install', ['git-check', 'tsd:install'], function () {
  return bower.commands.install()
    .on('log', function (data) {
    gutil.log('bower', gutil.colors.cyan(data.id), data.message);
  });
});

gulp.task('git-check', function (done) {
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

gulp.task('tsd:install', function () {
  var bower = require(path.join(process.cwd(), 'bower.json'));

  var dependencies = [].concat(
    Object.keys(bower.dependencies),
    Object.keys(bower.devDependencies)
    );

  var query = new tsd.Query();
  dependencies.forEach(function (dependency) {
    query.addNamePattern(dependency);
  });

  var options = new tsd.Options();
  options.resolveDependencies = true;
  options.overwriteFiles = true;
  options.saveBundle = true;

  return tsdApi.readConfig()
    .then(function () {
    return tsdApi.select(query, options);
  })
    .then(function (selection) {
    return tsdApi.install(selection, options);
  })
    .then(function (installResult) {
    var written = Object.keys(installResult.written.dict);
    var removed = Object.keys(installResult.removed.dict);
    var skipped = Object.keys(installResult.skipped.dict);

    written.forEach(function (dts) {
      gutil.log('Definition file written: ' + dts);
    });

    removed.forEach(function (dts) {
      gutil.log('Definition file removed: ' + dts);
    });

    skipped.forEach(function (dts) {
      gutil.log('Definition file skipped: ' + dts);
    });
  });
});

gulp.task('scripts', function () {
  return gulp.src('./src/**/*.ts')
    .pipe(sourcemaps.init())
    .pipe(typescript({
      noImplicitAny:false,
      sortOutput: true,
      typescript: require('typescript')
    }))
  //.pipe(uglify())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./www'));
});