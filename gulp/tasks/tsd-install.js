'use strict';

// Necessary Plugins
var gulp     = require('gulp')
    ,gutil   = require('gulp-util')
    ,paths   = require('../paths')
    ,bower   = require('bower')
    ,concat  = require('gulp-concat')
    ,path = require('path')
    ,tsd = require('tsd')
    ,tsdApi = new tsd.getAPI('tsd.json');

//
module.exports = gulp.task('tsd:install', function () {
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
