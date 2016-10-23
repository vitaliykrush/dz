var gulp = require('gulp'),
	concatCss = require('gulp-concat-css');

gulp.task('concat', function () {
  return gulp.src('./public/css/*.css')
    .pipe(concat("bundle.css"))
    .pipe(gulp.dest('./public/build/'));
});