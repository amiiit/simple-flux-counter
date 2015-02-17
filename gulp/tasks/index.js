var gulp = require('gulp');

gulp.task('index', function () {
    gulp.src('src/index.html').pipe(gulp.dest('build/'))
});