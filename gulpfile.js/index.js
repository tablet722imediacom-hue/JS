const gulp = require("gulp");
const series = gulp.series;
const compileIndex = require("./viewTasks").compileIndex;

const dev = series(compileIndex/*, serve, watchHtml*/);

module.exports = {
    dev: dev
}