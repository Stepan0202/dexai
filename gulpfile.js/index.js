'use strict'
const {src, dest, series, parallel, watch} = require('gulp');
const fileInclude = require('gulp-file-include');
const gulpSass = require('gulp-sass')(require('sass'));
const browserSync = require('browser-sync').create();




function htmlInclude(){
    return src('./src/*.html')
    .pipe(fileInclude())
    .pipe(dest('./dist/'));
}

function scssCompiler(){
    return src('./src/**/*.scss')
    .pipe(gulpSass())
    .pipe(dest('./dist/css/'))
}
function browserSyn(){
    browserSync.init({
        server: { 
            baseDir: "./dist/"
        }
    });
}
function browserReload(cb){
    browserSync.reload();
    cb();
}

function watchTask(){
    watch('./src/**/*.html', series(htmlInclude, browserReload)),
    watch('./src/**/*.scss', series(scssCompiler, browserReload))
}

  exports.default = series(
    htmlInclude,
    scssCompiler,
    parallel(browserSyn, watchTask)
)
    
  exports.fileInclude = htmlInclude;
  exports.scssCompiler = scssCompiler;
  exports.browserSync = browserSyn;
  exports.watchTask = watchTask;