var gulp = require('gulp');
var sass = require('gulp-sass');
var plumber = require('gulp-plumber');
var notify = require('gulp-notify');
var browserSync = require('browser-sync');
var autoprefixer = require('gulp-autoprefixer');
var jade = require('gulp-jade');


function customPlumber() { 
    return plumber({
        errorHandler: notify.onError("Error: <%= error.message %>")
    });
}


gulp.task('watch', ['browserSync'], function() {
    gulp.watch('public/app/scss/**/*.scss', ['sass']);
    gulp.watch('public/app/jade/**/*.jade', ['jade']);
});


gulp.task('sass', function() {
  return gulp.src('public/app/scss/**/*.scss')
    // Checks for errors all plugins
    .pipe(customPlumber('Error running Sass'))
    .pipe(sass())
    .pipe(gulp.dest('public/tmp/css'))
    // Tells Browser Sync to reload files task is done
    .pipe(browserSync.reload({
        stream: true
    }))
});


gulp.task('jade', function() {
  return gulp.src('public/app/jade/**/*.jade')
    // Checks for errors all plugins
    .pipe(customPlumber('Error running Jade'))
    .pipe(jade())
    .pipe(gulp.dest('public/tmp/templates'))
    // Tells Browser Sync to reload files task is done
    .pipe(browserSync.reload({
        stream: true
    }))
});


gulp.task('browserSync', function() { 
    browserSync({
        proxy: 'localhost:8888/new-craft-project/public/',
        browser: 'google chrome',
        notify: false,
        open: 'localhost:3000/new-craft-project/public/'
    })
});


gulp.task('default', ['watch', 'sass', 'jade'], function() {
    return gulp.src('public/app/styles.css')
		.pipe(autoprefixer({
			browsers: ['last 2 versions'],
			cascade: false
		}))
		.pipe(gulp.dest('public/tmp/css'));
});


// Build task – to execute site ready to deploy
gulp.task('build-templates', function() {
    return gulp.src('public/tmp/templates/*/**.html')
        .pipe(gulp.dest('public/deploy/templates'));
});

gulp.task('build-css', function() {
    return gulp.src('public/tmp/css/styles.css')
        .pipe(gulp.dest('public/deploy/css'));
});

gulp.task('build', ['build-templates', 'build-css'], function() {});