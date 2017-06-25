const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build')
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader :'vue-loader',
                exclude: [/node_modules/],
                options: {
                    loaders:{
                        'scss': 'vue-style-loader!css-loader!sass-loader',
                        'sass': 'vue-style-loader!css-loader!sass-loader?indentedSyntax'
                    }
                }
            }
        ]
    },

    devServer: {
        hot : true,
        inline: true,
        host: '0.0.0.0',
        disableHostCheck: true,
        port: 3000,
        open : true,
        contentBase : "public",
        watchOptions: {
            aggregateTimeout: 300,
            poll: 1000
        }
    },

    devtool: '#eval-source-map',

    plugins:[
        new webpack.HotModuleReplacementPlugin()
    ]
};