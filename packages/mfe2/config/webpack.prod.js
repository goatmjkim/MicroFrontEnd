const { merge } =require('webpack-merge');
const ModuleFedarationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const packageJson = require('../package.json');
const commonConfig = require('./webpack.common.js')

const prodConfig ={
    mode: 'production',
    output: {
        filename: '[name].[contenthash].js',
        publicPath: '/mfe1/latest/',
    },
    plugins:[
        new ModuleFedarationPlugin({
            name: 'mfe2',
            filename: 'remoteEntry2.js',
            exposes:{
                './MircoFrontEnd2Index': './src/routes'
            },
            shared: packageJson.dependencies,
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html'
        }),
    ],
};

module.exports = merge(commonConfig,prodConfig);