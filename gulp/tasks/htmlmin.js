'use strict';

var htmlmin = require('gulp-htmlmin');

module.exports = function(gulp, config) {
  
  gulp.task('minify', function() {
  return gulp.src('./app/*.html')
    .pipe(htmlmin({
      collapseWhitespace: true,
      minifyCSS: true}))
    .pipe(gulp.dest(config.build.distPath))
});
};