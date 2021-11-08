const { merge } =require('webpack-merge');
const ModuleFedarationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const packageJson = require('../package.json');
const commonConfig = require('./webpack.common.js')
const HtmlWebpackPlugin = require('html-webpack-plugin');

const prodConfig ={
    mode: 'production',
    output: {
        filename: '[name].[contenthash].js',
        publicPath: '/mfe2/latest/',
    },
    plugins:[
        new ModuleFedarationPlugin({
            name: 'mfe2',
            filename: 'remoteEntry2.js',
            exposes:{
                './MicroFrontEnd2Index': './src/routes'
            },
            shared: packageJson.dependencies,
        }),
    ],
};

module.exports = merge(commonConfig,prodConfig);