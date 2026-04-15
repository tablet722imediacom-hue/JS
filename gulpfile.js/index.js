const gulp = require("gulp");
const jsTasks = require("./jsTasks");
const series = gulp.series;
const viewTasks = require("./viewTasks").compileIndex;
const copyJs = require("./jsTasks").copyJs;

const dev = series(compileIndex, jsTasks.copyJs, jsTasks.watchJS, viewTasks.watchIndex/*, serve, watchHtml*/);

module.exports = {
    dev: dev
};