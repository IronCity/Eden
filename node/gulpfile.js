const gulp = require('gulp')
const jshint = require('gulp-jshint')
const concat = require('gulp-concat')
const uglify = require('gulp-uglify')
const rename = require('gulp-rename')
const less = require('gulp-less')
const path = require('path')

gulp.task('lint', () => {
    gulp.src('./js/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'))
})

gulp.task('less', () => {
    return gulp.src('./less/**/*.less')
        .pipe(less({
            paths: [ path.join(__dirname, 'less', 'includes') ]
        }))
        .pipe(gulp.dest('./public'))
})

gulp.task('scripts', () => {
    gulp.src('./js/*.js')
        .pipe(concat('all.js'))
        .pipe(gulp.dest('./dist'))
        .pipe(rename('all.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./dist'))
})

gulp.task('default', [ 'lint', 'less', 'scripts' ], () => {
    gulp.watch('./js/*.js', () => {
        gulp.task('default', [ 'lint', 'less', 'scripts' ])
    })
})