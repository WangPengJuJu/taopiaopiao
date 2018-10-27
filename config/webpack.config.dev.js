'use strict';
const path = require('path');
const webpack = require('webpack');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');
const htmlWebpackPlugin = require('html-webpack-plugin');
const paths = require('./paths');
// const getClientEnviroment = require('./env');

function resolve(dir){
    return path.join(__dirname,"..",dir);
}
module.exports = {
    // entry:[
    //     'babel-polyfill',//babel只会转换新的javascript句法，不会转换新的api例如set,maps,generator,promise等，这时就需要babel-polyfill为当前环境提供一个垫片
        // 'react-hot-loader/patch',
    //     require.resolve('react-dev-utils/webpackHotDevClient'),
    //     path.resolve(__dirname, '../src/index.js')//入口文件
    // ], //指定入口文件，程序从这里开始编译,__dirname当前所在目录, ../表示上一级目录, ./同级目录
    entry:{
        bundle:['react-hot-loader/patch','babel-polyfill','webpack-dev-server/client?http://127.0.0.1:3000','webpack/hot/dev-server',path.resolve(__dirname,'../src/index.js')]
    },
    // output: {
    //     path: path.resolve(__dirname, '../dist'), // 输出的路径
    //     filename: 'bundle.js',  // 打包后文件
    //     publicPath:'/',        
    //     devtoolModuleFilenameTemplate: info =>
    //     path.resolve(info.absoluteResourcePath).replace(/\\/g, '/'),
    // },
    output:{
        path:path.resolve(__dirname,'/dist'),
        filename:'bundle.js',
        publicPath:'/',
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: {
                    loader: 'babel-loader',
                    
                    options: {
                        presets: ['react','es2015'],
                        plugins: ['transform-decorators-legacy' ],
                    }
                },
                exclude: /node_modules/
            },
            {
                test:/\.css/,
                use:[
                    {
                        loader:'style-loader',

                    },
                    {
                        loader:'css-loader',
                        options:{
                            importLoaders:1,
                        },
                    },
                    {
                        loader:'postcss-loader',
                        options:{plugins:() => [
                            require('autoprefixer'),
                            require('precss'),
                            require('postcss-flexbugs-fixes'),
                        ]},
                    },
                ]  
                
            },
            {
                test:[/\.png$/,/\.jpe?g$/,/\.gif$/],
                loader:'url-loader',
                options:{
                    limit:10000,//10000字节大小的图片会自动转成base64
                },
            },
            {
                test: /\.ttf$/,
                use: [
                  {
                    loader: 'ttf-loader',
                    options: {
                      name: './font/[hash].[ext]',
                    },
                  },
                ]
            }
        ]
    },
    plugins:[
        // new htmlWebpackPlugin({//根据模板文件自动生成入口文件index.html
        //     template:paths.appHtml,
        //     // filename:'index.html',
        //     inject:true
        // }),
        new webpack.HotModuleReplacementPlugin(),
    ]
}
