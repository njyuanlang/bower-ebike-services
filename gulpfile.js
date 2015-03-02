var gulp = require('gulp');
var rename = require('gulp-rename');
var loopbackAngular = require('gulp-loopback-sdk-angular');

gulp.task('build', function () {
  return gulp.src('../ebike-backend/server/server.js')
    .pipe(loopbackAngular({apiUrl:'http://0.0.0.0:3000/api'}))
    .pipe(rename('ebike-lbservices.js'))
    .pipe(gulp.dest('./'));
})

gulp.task('default', ['build'])