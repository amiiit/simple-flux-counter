var browserify = require('browserify'),
    gulp = require('gulp'),
    source = require('vinyl-source-stream'),
    babelify = require("babelify"),
    connect = require('gulp-connect')
    ;


gulp.task('reactify', function () {
    return browserify({debug: true})
        .add('./src/app.js')
        .transform(babelify)
        .bundle()
        //Pass desired output filename to vinyl-source-stream
        .pipe(source('bundle.js'))
        // Start piping stream to tasks!
        .pipe(gulp.dest('./build/'))
        .pipe(connect.reload())
        ;
});

gulp.task('workerify', function () {
    return gulp.src(['./src/workers/service-worker.js','./src/manifest.json'])
        .pipe(gulp.dest('./build'));
});

