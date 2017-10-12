// cd freelance/template/site/boilerplate
// sass --watch sass/style.scss:css/style.min.css --style compressed
// sass --watch sass/style.scss:css/style.css

// generate site:
// cd to project directory
// jekyll serve

// compile css
// cd to assets folder
// gulp watch

// ./node_modules/.bin/kss --source /assets/sass/*.scss --destination /styleguide --css /assets/css/style.min.css
//  styledown css/style.css config.md > styleguide.html
// styledown sass/**/*.css config.md > styleguide.html

// DURING DEVELOPMENT USE:
// gulp watch
'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var minifyCSS = require('gulp-minify-css');
var livereload = require('gulp-livereload');
var styledown = require('gulp-styledown');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');
var htmlmin = require('gulp-htmlmin');
var shell = require('gulp-shell');


gulp.task('sass', function () {
  return gulp.src('sass/style.scss')
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(minifyCSS())
    .pipe(autoprefixer())
    .pipe(rename('style.min.css'))
    .pipe(gulp.dest('css'))
    .pipe(livereload());
});
gulp.task('css', function () {
  return gulp.src('sass/style.scss')
    .pipe(sass({outputStyle: 'expanded'}))
    .pipe(autoprefixer())
    .pipe(rename('style.css'))
    .pipe(gulp.dest('css'))
    .pipe(livereload());
});
gulp.task('styledown', function () {
  return gulp.src(['sass/**/*.scss', '!sass/framework/**/*.scss'])
    .pipe(styledown({
      config: 'config.md',
      filename: 'index.html'
    }))
    .pipe(gulp.dest('../styleguide'));
});

gulp.task('watch', function() {
  livereload.listen();
  gulp.watch('sass/**/*.scss', ['sass']);
  gulp.watch('sass/**/*.scss', ['css']);
  gulp.watch('sass/**/*.scss', ['styledown']);
});
