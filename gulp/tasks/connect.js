var gulp = require('gulp'),
    watch = require('gulp-watch'),
    connect = require('gulp-connect');

gulp.task('connect', function () {
    connect.server({
        root: 'build/',
        port: 9000,
        livereload: true
    });
});

gulp.task('watch', function () {
    watch(['src/**/*.js', 'src/*.js'], function () {
        gulp.run('build');
    });
});