const gulp = require("gulp");
const concat_css = require("gulp-concat-css");
const clean_css = require("gulp-clean-css");
const { watch, series } = require("gulp");

// Minify and bundle CSS from _site/assets
function minify_css() {
  return gulp
    .src("_site/assets/**/*.css")
    .pipe(concat_css("core.css"))
    .pipe(clean_css())
    .pipe(gulp.dest("_site/css"));
}

// Watch original CSS source files in assets/
function watch_css() {
  return watch("assets/**/*.css", series(minify_css));
}

exports.minify_css = minify_css;
exports.watch = watch_css;
exports.default = series(minify_css, watch_css);
