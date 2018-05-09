var gulp = require('gulp');  
var sass = require('gulp-sass');  

gulp.task('sass', function () {  
    gulp.src('scss/styles.scss')
        .pipe(sass({includePaths: ['scss']}))
        .pipe(gulp.dest('css'));
});


gulp.task('default', ['sass'], function () {  
    gulp.watch("scss/*.scss", ['sass']);
});