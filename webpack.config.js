let ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: "./src",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },

    module: {
        rules: [
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                                  use: 'css-loader'
            })
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: [
                        'env',
                        'react'
                    ],
                    plugins: ['transform-runtime']
                }
            }
        ]
    },

    plugins: [
        new ExtractTextPlugin('styles.css')
    ]
};