var gulp = require('gulp');
var concat = require('gulp-concat');
var replace = require('gulp-replace');
var del = require('del');
var templateCache = require('gulp-angular-templatecache');
var imagemin = require('gulp-imagemin');
var gulpif = require('gulp-if');
var sprite = require('css-sprite').stream;

var filename = 'app.' + Date.now() + '.';

gulp.task('default', ['clean:dist', 'build']);

gulp.task('build', function() {

	gulp.src([
            'scripts/vendor/angular-1.3.3.js', 
			'scripts/vendor/angular-animate1.3.3.js',
			'scripts/**/*.js'])
    	.pipe(concat(filename + 'js'))
    	.pipe(gulp.dest('dist'));

//    gulp.src(['img/**/*.jpg', 'img/**/*.gif'])
//        .pipe(imagemin({ optimizationLevel: 3, progessive: true, interlaced: true })
//        .pipe(gulp.dest('dist/content')));

    gulp.src('img/art/*.jpg')
        .pipe(sprite({
          name: 'sprite',
          style: '_sprite.css',
          cssPath: '.',
          processor: 'css'
        }))
        .pipe(gulpif('*.png', gulp.dest('dist/img'), gulp.dest('css')))

    gulp.src(['css/**/*.css', 'css/**/*.css'])
        .pipe(concat(filename + 'css'))
        .pipe(gulp.dest('dist'));

    gulp.src('index.html')
    	.pipe(replace('app.', filename))
    	.pipe(gulp.dest('dist'));
});

gulp.task('clean:dist', function() {
	return del(['dist/**/*.js', 'dist/**/*.css']);
});