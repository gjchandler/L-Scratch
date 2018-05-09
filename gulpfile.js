var gulp = require('gulp');  
var sass = require('gulp-sass');  
var plumber = require('gulp-plumber');

gulp.task('sass', function () {  
    gulp.src('scss/styles.scss')
      .pipe(plumber())
        .pipe(sass({includePaths: ['scss']}))
        .pipe(gulp.dest('css'));
});


gulp.task('default', ['sass'], function () {  
    gulp.watch("scss/*.scss", ['sass']);
});