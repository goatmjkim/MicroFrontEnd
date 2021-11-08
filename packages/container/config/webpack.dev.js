const { merge } = require('webpack-merge');

const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');
const packageJson = require('../package.json');


const devConfig ={
    mode: 'development',
    devServer:{
        port: 8080,
        historyApiFallback:{
            index: '/index.html'
        },
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'container',
            remotes:{
                mfe1: 'mfe1@http://localhost:8081/remoteEntry.js',
                mfe2: 'mfe2@http://localhost:8082/remoteEntry2.js'

            },
            shared: packageJson.dependencies,
        }),
        
    ],
};

module.exports = merge(commonConfig, devConfig);