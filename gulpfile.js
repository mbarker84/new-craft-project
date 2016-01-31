var gulp = require('gulp');
var sass = require('gulp-sass');
<<<<<<< HEAD
var plumber = require('gulp-plumber');
var notify = require('gulp-notify');
var browserSync = require('browser-sync');
var autoprefixer = require('gulp-autoprefixer');


function customPlumber () { 
    return plumber({
        errorHandler: notify.onError("Error: <%= error.message %>")
    });
}

gulp.task('sass', function() {
  return gulp.src('public/app/scss/**/*.scss')
    // Checks for errors all plugins
    .pipe(customPlumber('Error running Sass'))
    .pipe(sass())
    .pipe(gulp.dest('public/app/css'))
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
})


gulp.task('watch', ['browserSync', 'sass'], function() {
  gulp.watch('public/app/scss/**/*.scss', ['sass']);
})


gulp.task('default', ['watch'], function () {
    return gulp.src('public/app/styles.css')
		.pipe(autoprefixer({
			browsers: ['last 2 versions'],
			cascade: false
		}))
		.pipe(gulp.dest('dist'));
});
=======

gulp.task('hello', function() {
  console.log('Hello');
});

gulp.task('sass', function(){
  return gulp.src('app/scss/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('app/css'))
});

gulp.task('watch', function(){
  gulp.watch('app/scss/**/*.scss', ['sass']);
})

gulp.task('default', ['watch', 'sass', 'hello']);
>>>>>>> aa92a94441653fc86386f42fbc7c474fd099b52d
