let digo = require('digo');
let path = require('path');

/**
 * 打包额外的文件
 */
exports.bundleExtraFiles = () => {
    copyStatic();
    copyConfig();
}
/**
 * 打包静态资源
 */
copyStatic = () => {
    const staticPath = path.resolve(process.cwd(), 'static');
    if (digo.existsDir(staticPath)) {
        digo.copyDir(staticPath, path.resolve(process.cwd(), 'dist'));
    }
}

/**
 * 打包配置文件
 */
copyConfig = () => {
    digo.copyFile(path.resolve(process.cwd(), 'package.json'), path.resolve(process.cwd(), 'dist/package.json'));
}