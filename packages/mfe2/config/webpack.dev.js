const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');
const packageJson = require('../package.json');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const devConfig ={
    mode: 'development',
    devServer:{
        port: 8082,
        historyApiFallback:{
            index: '/index.html'
        },
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'mfe2',
            filename: 'remoteEntry2.js',
            exposes:{
                './MicroFrontEnd2Index': './src/routes',
            },
            shared: packageJson.dependencies,
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html'
        }),
    ],
};

module.exports = merge(commonConfig, devConfig);