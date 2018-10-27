const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: path.resolve(__dirname, '../src/index.js'), //指定入口文件，程序从这里开始编译,__dirname当前所在目录, ../表示上一级目录, ./同级目录
    output: {
        path: path.resolve(__dirname, '../dist'), // 输出的路径
        filename: 'bundle.js'  // 打包后文件
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015', 'react'],
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
        ]
    },
    plugins:[
        new htmlWebpackPlugin({//根据模板文件自动生成入口文件index.html
            template:'./public/index.html',
            filename:'index.html',
        })
    ]
}
