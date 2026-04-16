// index.js
const gulp = require("gulp");
const jsTasks = require("./jsTasks");
const viewTasks = require("./viewTasks"); // Importa l'intero modulo, non solo una funzione
const series = gulp.series;

// Non c'è bisogno di assegnare copyJs a una variabile a sé stante se usiamo semplicemente jsTasks.copyJs
// const copyJs = require("./jsTasks").copyJs; 

// Fai riferimento alle funzioni associate ai moduli
const dev = series(
    viewTasks.compileIndex, 
    jsTasks.copyJs, 
    jsTasks.watchJS, 
    viewTasks.watchIndex
    /*, serve, watchHtml*/
);

module.exports = {
    dev: dev
};