

import * as webpack from 'webpack';
import * as webpackMerge from 'webpack-merge';

// import * as common from './webpack.config';
const common = require('./webpack.config');

// const entry = {...common.entry, }

const webpackConfig: webpack.Configuration = webpackMerge(
    common,
    {
        // entry : {
        //     client: [
        //         'react-hot-loader/patch',
        //         'webpack-hot-middleware/client',
        //     ]
        // },
        output: {
            filename: '[name].[hash].js',
            chunkFilename: '[name].[hash].js',
        },
        plugins: [
            new webpack.HotModuleReplacementPlugin(),
            // new webpack.NoEmitOnErrorsPlugin(),
        ],
        devServer: {
            hot: true,
            contentBase: 'out/client',
            disableHostCheck: true,
            proxy: {
                '/api': {
                    target: 'https://api.bithumb.com',
                    pathRewrite: { '^/api': '' },
                    changeOrigin: true,
                    logLevel: 'debug',
                    // secure: false,
                    // headers: {
                    //     'Host': 'api.bithumb.com',
                    //     'Origin': undefined,
                    //     'X-Requested-With': undefined,
                    //     'Referer': undefined,
                    // }
                },
                '/btweb': {
                    target: 'https://www.bithumb.com',
                    pathRewrite: { '^/btweb': '' },
                    changeOrigin: true,
                    logLevel: 'debug',
                    // secure: false,
                    // headers: {
                    //     'Host': 'api.bithumb.com',
                    //     'Origin': undefined,
                    //     'X-Requested-With': undefined,
                    //     'Referer': undefined,
                    // }
                },
                '/btws': {
                    target: 'wss://wss.bithumb.com',
                    pathRewrite: { '^/btws': '' },
                    changeOrigin: true,
                    logLevel: 'debug',
                    ws: true,
                    // wss: true,
                    // secure: false,
                    headers: {
                        'Host': 'wss.bithumb.com',
                        'Origin': 'https://www.bithumb.com',
                    }
                },
            }
        },
        devtool: 'inline-source-map',
    }
);

module.exports = webpackConfig;
