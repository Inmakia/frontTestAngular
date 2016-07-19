'use strict';

var browserify = require('gulp-browserify');
var config = require('../config.js');

module.exports = function(gulp, config) {
  
  gulp.task('browserify', function() {
    return gulp.src(config.build.appPath)
      .pipe(browserify({
        insertGlobals : true
      }))
    .pipe(gulp.dest(config.build.distPath))
  });
};