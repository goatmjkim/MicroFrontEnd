const { merge } = require('webpack-merge');

const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');
const packageJson = require('../package.json');

const devConfig ={
    mode: 'development',
    devServer:{
        port: 8081,
        historyApiFallback:{
            index: '/index.html'
        },
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'mfe1',
            filename: 'remoteEntry.js',
            exposes:{
                './MicroFrontEnd1Index': './src/routes',
            },
            shared: packageJson.dependencies,
        })
    ],
};

module.exports = merge(commonConfig, devConfig);