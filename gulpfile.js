var gulp        = require('gulp');
var browserSync = require('browser-sync').create();

// Static server
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});

// or...

gulp.task('browser-sync', function() {
    browserSync.init(["css/*.css", "js/*.js", "*.html", "*.js"], {
    	server: {
    		baseDir: "./"
    	}
	});
});