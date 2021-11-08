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
                mfe1: `mfe1@${domain}/mfe1/latest/remoteEntry.js`,
                mfe2: `mfe2@${domain}/mfe2/latest/remoteEntry2.js`
            },
            shared: packageJson.dependencies
        })
    ]
};

module.exports = merge(commonConfig, prodConfig);