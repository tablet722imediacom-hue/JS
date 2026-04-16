const gulp = require("gulp");
const paths = require("./paths"); 

const copyJs = function(){
    // Usiamo la funzione che hai creato in paths.js per coerenza!
    const jsIndex = paths.getJsEntryPath(); 
    
    // Rimosso lo slash iniziale ("/utils.js" -> "utils.js") perché getJsSrcPath lo aggiunge già
    const utilsIndex = paths.getJsSrcPath("utils.js");
    
    // IL FIX CRITICO: Scriviamo il percorso manuale come abbiamo fatto nell'altro file
    const modelsIndex = "./src/models/Wallet.js"; 
    
    return gulp.src([jsIndex, utilsIndex, modelsIndex], {base: paths.getSrcFolder()})
        .pipe(gulp.dest(paths.getDistFolder())); // <-- Aggiunte le parentesi tonde qui!
};

const watchJS = function (cb){
    // Va benissimo usare getJsSrcPath qui, Gulp accetta il doppio slash generato, 
    // ma passargli "**/*" è più pulito di "/**/*"
    gulp.watch(paths.getJsSrcPath("**/*"), copyJs);
    cb();
};

module.exports = {
    copyJs: copyJs,
    watchJS: watchJS
};