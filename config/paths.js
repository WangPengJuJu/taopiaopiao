"use strict";

const path = require("path");
const fs = require("fs");
const url = require("url");

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory,relativePath);


module.exports = {
    appPublic:resolveApp('public'),
    appHtml:resolveApp('public/index.html'),
    appIndexJs:resolveApp('src/index.js'),
    appPackageJson:resolveApp('package.json'),
    appSrc:resolveApp('src'),
    appBuild:resolveApp('dist'),
}