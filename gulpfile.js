var gulp = require('gulp'); 
var connect = require('gulp-connect');
var del = require('del');
var uglify = require('gulp-uglify');
var ngmin = require('gulp-ngmin');
var minifyHtml = require('gulp-minify-html');
var minifyCss = require('gulp-minify-css');
var usemin = require('gulp-usemin');
var rev = require('gulp-rev');
var clean = require('gulp-clean');
var imagemin = require('gulp-imagemin');

var paths = {
  scripts: [ 'app/**/*.js', '!app/bower_components/**/*.js' ],
  html: [
    './app/**/*.html',
    '!./app/index.html',
    '!./app/bower_components/**/*.html'
  ],
  index: './app/index.html',
  build: './build/'
}

gulp.task('clean', function(){
  del(paths.build);
});

gulp.task('copy', [ 'clean' ], function() {
  gulp.src( paths.html )
    .pipe(gulp.dest('build/'));
});

gulp.task('usemin', [ 'copy' ], function(){
  gulp.src( paths.index )
    .pipe(usemin({
      css: [ minifyCss(), 'concat' ],
      js: [ ngmin(), uglify() ]
    }))
    .pipe(gulp.dest( paths.build ))
});

// Image optimization task
gulp.task('images', function() {
  return gulp.src('app/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('build/images'));
});

gulp.task('build', ['usemin', 'images' ]);

// connect
gulp.task('connect', function() {
  connect.server();
});
gulp.task('default', ['connect']);