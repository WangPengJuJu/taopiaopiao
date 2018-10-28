'use strict';

const path = require("path");
const webpack = require("webpack");
const WebpackDevServer = require("webpack-dev-server");
const config = require("../config/webpack.config.dev.js");

new WebpackDevServer(webpack(config),{
    // publicPath:"http://127.0.0.1:3000/storage",
    publicPath:"/",
    contentBase:path.resolve(__dirname,"dist"),
    inline:true,
    hot:true,
    historyApiFallback:true,
    hotOnly:true,
}).listen(3000,'127.0.0.1',function(err,result){
    if(err){
        console.log(err);
    }else{
        console.log("listening at 127.0.0.1:3000");
    }
});
