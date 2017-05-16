var gulp = require('gulp');
var rename = require('gulp-rename');
var loopbackAngular = require('gulp-loopback-sdk-angular');

gulp.task('build', function () {
  return gulp.src('../../../../ebike-backend/server/server.js')
    // .pipe(loopbackAngular({apiUrl:'https://api.baoxu360.com/api'}))
    .pipe(loopbackAngular({apiUrl:'https://bx.minfan.pw/api'}))
    .pipe(rename('ebike-lbservices.js'))
    .pipe(gulp.dest('./'));
})

gulp.task('default', ['build'])
