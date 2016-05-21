var concat = require('gulp-concat');
var babel = require('gulp-babel');
var browserify = require('gulp-browserify')
var uglify = require('gulp-uglify');
var gulp = require('gulp');

gulp.task('default', function () {
  gulp.src('client/*.js')
  .pipe(browserify({transform:['reactify']}))
  .pipe(babel({presets:['es2015'],compact:false}))
  .pipe(concat('all.js'))
  .pipe(uglify())
  .pipe(gulp.dest('public/js'))
});

gulp.task('lib', () =>
	gulp.src('./src/*')
		.pipe(babel({presets:['es2015']}))
		.pipe(gulp.dest('./lib'))
);
