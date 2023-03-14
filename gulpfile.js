const gulp = require('gulp');
const gulpSass = require('gulp-sass')(require('sass'));
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');

function sassCompilation() {
    return gulp.src('source/styles/main.scss')
    .pipe(gulpSass(
        {outputStyle: 'compressed'}
    ))
    .pipe(gulp.dest('build/styles'))
}

function javascriptCompilation() {
    return gulp.src('source/scripts/main.js')
    .pipe(uglify())
    .pipe(gulp.dest('build/scripts'))
}

function comprimeImagens() {
    return gulp.src('source/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('build/images'))
}

exports.default = function() {
    gulp.watch('source/styles/main.scss', { ignoreInitial: false }, gulp.series(sassCompilation));
    gulp.watch('source/scripts/main.js', { ignoreInitial: false }, gulp.series(javascriptCompilation));
    gulp.watch('source/images/*', { ignoreInitial: false }, gulp.series(comprimeImagens));
}