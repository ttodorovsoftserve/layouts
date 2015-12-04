var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var htmlreplace = require('gulp-html-replace');

var config = {
    paths: {
        html: ['./src/*.html'],
        css: [
            './src/styles/*.css',
            './src/vendor/bootstrap/dist/css/bootstrap.css'
        ],
        dist: './dist'
    }
};

gulp.task('html', function() {
    gulp.src(config.paths.html)
        .pipe(htmlreplace({
            'css': 'css/bundle.css'
        }))
        .pipe(gulp.dest(config.paths.dist));

});


gulp.task('sass', function() {
    gulp.src('src/styles/sass/*.scss')
        .pipe(sass({
            onError: function(e) {
                console.log(e);
            }
        }))
        .pipe(gulp.dest('src/styles/'))
});

gulp.task('css', function() {
    gulp.src(config.paths.css)
        .pipe(concat('bundle.css'))
        .pipe(gulp.dest(config.paths.dist + '/css'));
});

gulp.task('watch', function() {
    gulp.watch('src/*.html', ['html']);
    gulp.watch('src/styles/sass/*.scss', ['sass']);
    gulp.watch(config.paths.css, ['css']);
});

gulp.task('default', ['html', 'sass', 'css', 'watch']);