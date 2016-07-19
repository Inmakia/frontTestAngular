'use strict';

var server = require('gulp-server-livereload');

module.exports = function(gulp, config) {

  gulp.task('serve', function() {
    gulp.src(config.server.src)
      .pipe(server({
        open: config.server.open,
        host: config.server.host,
        port: config.server.port,
        livereload: config.server.livereload,
        directoryListing: config.server.directoryListing
      }));
  });
};