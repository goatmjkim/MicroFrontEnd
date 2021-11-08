const { merge } =require('webpack-merge');
const ModuleFedarationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const packageJson = require('../package.json');
const commonConfig = require('./webpack.common.js')

const prodConfig ={
    mode: 'production',
    output: {
        filename: '[name].[contenthash].js',
        publicPath: '/microFrontEnd2/latest/',
    },
    plugins:[
        new ModuleFedarationPlugin({
            name: 'microFrontEnd2',
            filename: 'remoteEntry2.js',
            exposes:{
                './MircoFrontEnd2Index': './src/routes'
            },
            shared: packageJson.dependencies,
        }),
    ],
};

module.exports = merge(commonConfig,prodConfig);