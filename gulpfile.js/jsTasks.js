const gulp = require("gulp");
const paths = require("./paths"); 

const copyJs = function(){
    const jsIndex = "./src/js/index.js";
    const utilsIndex = paths.getJsSrcPath("/utils.js");
    const modelsIndex = paths.getJsSrcPath("/models/Wallet.js");
    return gulp.src([jsIndex, utilsIndex, modelsIndex], {base: paths.getSrcFolder()})
        .pipe(gulp.dest(paths.getDistFolder));
};

const watchJS = function (cb){
    gulp.watch(paths.getJsSrcPath("/**/*"), copyJs);
    cb();
};

module.exports = {
    copyJs: copyJs,
    watchJS: watchJS
}