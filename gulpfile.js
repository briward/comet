/**
 * Gulp tasks.
 */
var gulp = require('gulp');
var concat = require('gulp-concat');
var rename = require('gulp-rename');

/**
 * Default gulp task.
 *
 * This runs on install of the bower package.
 */

gulp.task('pure', function() {
	return gulp.src('bower_components/pure/grids.css')
			.pipe(rename('pure.scss'))
			.pipe(gulp.dest('src'))
});

gulp.task('comet', function() {
	return gulp.src('src/*.scss')
			.pipe(concat('_comet.scss'))
			.pipe(gulp.dest('dist'))
});

gulp.task('default', ['pure', 'comet']);
