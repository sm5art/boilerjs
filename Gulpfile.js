var gulp = require('gulp');
var browserify = require('gulp-browserify');
var concat = require('gulp-concat');

gulp.task('scripts', function () {

    gulp.src(['react_client_scripts/*.js'])
        .pipe(browserify({
            debug: true,
            transform: [ 'reactify' ]
        }))
        .pipe(concat('all.js'))
        .pipe(gulp.dest('./public/js/'));

});

gulp.task('default', ['scripts']);