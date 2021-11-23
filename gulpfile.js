const gulp = require('gulp');
const {watch, series} = require('gulp');
const concat_css = require('gulp-concat-css');
const clean_css = require('gulp-clean-css');

function minify_css(f){
     // Folder with files to minify
     return gulp.src('_site/assets/**/*.css')
        //The method pipe() allow you to chain multiple tasks together
        //Bundle css files found in assets folder
        .pipe(concat_css("_site/core.css")) 
        //Execute the task to minify the files
        .pipe(clean_css())
        //Define the destination of the minified files with the method dest
        .pipe(gulp.dest('_site/css'));

        f();
}


exports.minify_css = minify_css;

//exports.default = series(minify_css, watch);
exports.default = function() {
    watch('assets/*.css', series(minify_css));
}

