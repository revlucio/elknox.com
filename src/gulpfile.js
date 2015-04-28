var gulp = require('gulp');
var concat = require('gulp-concat');
var replace = require('gulp-replace');
var del = require('del');
var templateCache = require('gulp-angular-templatecache');

var filename = 'app.' + Date.now() + '.';

gulp.task('default', ['clean:dist', 'build']);

gulp.task('build', function() {

	gulp.src([
            'scripts/vendor/angular-1.3.3.js', 
			'scripts/vendor/angular-animate1.3.3.js',
			'scripts/**/*.js'])
    	.pipe(concat(filename + 'js'))
    	.pipe(gulp.dest('dist'));

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