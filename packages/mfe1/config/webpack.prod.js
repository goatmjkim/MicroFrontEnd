const { merge } =require('webpack-merge');
const ModuleFedarationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const packageJson = require('../package.json');
const commonConfig = require('./webpack.common.js')

const prodConfig ={
    mode: 'production',
    output: {
        filename: '[name].[contenthash].js',
        publicPath: '/microFrontEnd1/latest/',
    },
    plugins:[
        new ModuleFedarationPlugin({
            name: 'mfe1',
            filename: 'remoteEntry.js',
            exposes:{
                './MircoFrontEnd1Index': './src/routes'
            },
            shared: packageJson.dependencies,
        }),
    ],
};

module.exports = merge(commonConfig,prodConfig);