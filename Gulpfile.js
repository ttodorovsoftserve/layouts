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
        js: [
            './src/vendor/jquery/dist/jquery.js',
            './src/vendor/bootstrap/dist/js/bootstrap.js'
        ],
        images: ['./src/images/*'],
        fonts: ['./src/fonts/*'],
        dist: './dist'
    }
};

gulp.task('html', function() {
    gulp.src(config.paths.html)
        .pipe(htmlreplace({
            'css': 'css/bundle.css',
            'js': 'js/bundle.js'
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

gulp.task('js', function() {
    gulp.src(config.paths.js)
        .pipe(concat('bundle.js'))
        .pipe(gulp.dest(config.paths.dist + '/js'));
});
gulp.task('jsstatic', function() {
    gulp.src('./src/js/overflow.js')
        .pipe(gulp.dest(config.paths.dist + '/js'));
});

gulp.task('images', function() {
    gulp.src(config.paths.images)
        .pipe(gulp.dest(config.paths.dist + '/images'));
});

gulp.task('fonts', function() {
    gulp.src(config.paths.fonts)
        .pipe(gulp.dest(config.paths.dist + '/fonts'));
});

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
    watch(config.paths.js, function() {
        gulp.start('js')
    });
    watch(config.paths.images, function() {
        gulp.start('images')
    });
    watch(config.paths.images, function() {
        gulp.start('fonts')
    });
});

gulp.task('default', ['html', 'sass', 'css', 'js', 'jsstatic', 'images', 'fonts', 'watch']);