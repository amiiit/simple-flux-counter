var gulp = require('gulp'),
    connect = require('gulp-connect');

gulp.task('index', function () {
    gulp.src('src/index.html').pipe(gulp.dest('build/'))
        .pipe(connect.reload())
});