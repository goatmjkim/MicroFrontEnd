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
                microFrontEnd1: 'microFrontEnd1@http://localhost:8081/remoteEntry.js',
                microFrontEnd2: 'microFrontEnd2@http://localhost:8082/remoteEntry2.js'

            },
            shared: packageJson.dependencies,
        }),
        
    ],
};

module.exports = merge(commonConfig, devConfig);