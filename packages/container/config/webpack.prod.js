const {merge} = require('webpack-merge');
const ModuleFedarationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');
const packageJson = require('../package.json');

const domain = process.env.PRODUCTION_DOMAIN;

const prodConfig ={
    mode: 'production',
    output: {
        filename: '[name].[contenthash].js',
        publicPath:'/container/latest/',
    },
    plugins: [
        new ModuleFedarationPlugin({
            name: 'container',
            remotes:{
                microFrontEnd1: `microFrontEnd1@${domain}/microFrontEnd1/latest/remoteEntry.js`,
                microFrontEnd2: `microFrontEnd2@${domain}/microFrontEnd1/latest/remoteEntry2.js`
            },
            shared: packageJson.dependencies
        })
    ]
};

module.exports = merge(commonConfig, prodConfig);