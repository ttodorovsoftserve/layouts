var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var htmlreplace = require('gulp-html-replace');
var watch = require('gulp-watch');

var config = {
    paths: {
        html: ['./src/*.html'],
        css: [
            './src/vendor/bootstrap/dist/css/bootstrap.css',
            './src/styles/*.css'
        ],
        images: ['./src/images/*'],
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

gulp.task('images', function() {
    gulp.src(config.paths.images)
        .pipe(gulp.dest(config.paths.dist + '/images'));
})

gulp.task('watch', function() {
    watch('src/*.html', function() {
        gulp.start('html')
    });
    watch('src/styles/sass/*.scss', function() {
        gulp.start('sass')
    });
    watch(config.paths.css, function() {
        gulp.start('css')
    });
    watch(config.paths.images, function() {
        gulp.start('images')
    });
});

gulp.task('default', ['html', 'sass', 'css', 'images', 'watch']);