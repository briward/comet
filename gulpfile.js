/**
 * Gulp tasks.
 */
var gulp = require('gulp'),
		rename = require('gulp-rename')

/**
 * Default gulp task.
 *
 * This runs on install of the bower package.
 */
gulp.task('default', function() {
	return gulp.src(['bower_components/pure/pure.css'])
			.pipe(rename('_pure.scss'))
			.pipe(gulp.dest('.'))
});
