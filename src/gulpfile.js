var gulp = require('gulp');
var concat = require('gulp-concat');
var replace = require('gulp-replace');
var del = require('del');
var templateCache = require('gulp-angular-templatecache');

var filename = 'app.' + Date.now() + '.';

gulp.task('default', ['clean:dist', 'build']);

gulp.task('build', function() {
	gulp.src('src/**/*.html')
        .pipe(templateCache({module: 'speaker-tracker'}))
        .pipe(gulp.dest('src'));

	gulp.src([
			'vendor/angular-1.4.0-beta4.min.js', 
			'src/module.js', 
			'src/**/*.js'])
    	.pipe(concat(filename + 'js'))
    	.pipe(gulp.dest('dist'));

    gulp.src('index.html')
    	.pipe(replace('app.', filename))
    	.pipe(gulp.dest('dist'));

	gulp.src(['content/**/*.css', 'vendor/**/*.css'])
		.pipe(concat(filename + 'css'))
    	.pipe(gulp.dest('dist'));

    gulp.src('vendor/fonts/*.woff')
    	.pipe(gulp.dest('dist/fonts'));
});

gulp.task('clean:dist', function() {
	return del('dist/**/*');
});