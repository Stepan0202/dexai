'use strict'
const {src, dest} = require('gulp');
const fileInclude = require('gulp-file-include');


function defaultTask(cb) {
    // place code for your default task here
    cb();
}

function htmlInclude(){
    return src('./src/**/*.html')
    .pipe(fileInclude())
    .pipe(dest('./dist/'));
}


  exports.default = defaultTask;
  exports.fileInclude = htmlInclude;