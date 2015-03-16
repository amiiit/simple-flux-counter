var less = require('gulp-less');
var path = require('path');
var gulp = require('gulp');

gulp.task('less', function () {
    return gulp.src('./src/app.less')
        .pipe(less({
            paths: [path.join('node_modules', 'material-ui', 'src', 'less')]
        }))
        .pipe(gulp.dest('./build'));
});