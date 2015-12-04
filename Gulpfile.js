var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');

var config = {
	paths: {
		css: ['./src/styles/*.css'],
		dist: './dist'
	}
};


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
        .pipe(gulp.dest(config.paths.dist + '/css'))
});

gulp.task('watch', function() {
	gulp.watch('src/styles/sass/*.scss', ['sass']);
    gulp.watch(config.paths.css, ['css']);
});   

gulp.task('default', ['sass', 'css' , 'watch']);