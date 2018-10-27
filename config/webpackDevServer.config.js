'use strict';

const errorOverlayMiddleware = require('react-dev-utils/errorOverlayMiddleware');
const noopServiceWorkerMiddle = require('react-dev-utils/noopServiceWorkerMiddleware');
const config = require('./webpack.config.dev');
const path = require('path');
const paths = require('./paths');

const protocol = process.env.HTTPS === 'true' ? 'https' : 'http';
const host = process.env.HOST || '0.0.0.0';

module.exports = function(proxy,allowedHost){
    
    return {
        disableHostCheck:
        !proxy || process.env.DANGEROUSLY_DISABLE_HOST_CHECK === 'true',
        compress:true,
        clientLogLevel:'none',
        contentBase:paths.appPublic,
        hot:true,
        publicPath:paths.appPublic,
        quiet:true,
        watchOptions:{
            ignored:new RegExp(
                `^(?!${path.normalize(paths.appSrc + '/').replace(/[\\]+/g,'\\\\')}).+[\\\\/]node_modules[\\\\/]`,'g'
            )
        },
        https:protocol === 'https',
        host:host,
        overlay:false,//在浏览器把错误显示出来
        historyApiFallback:{
            disableDotRule:true,
        },
        public:allowedHost,
        proxy,
        before(app){
            app.use(errorOverlayMiddleware);
            app.use(noopServiceWorkerMiddle);
        },
    };

}