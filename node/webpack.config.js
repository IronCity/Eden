const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js')

module.exports = {
    entry: {
        index: __dirname + '/src/app.js'
    },
    output: {
        path: __dirname + '/public/dist',
        filename: '[name].js'
    },
    plugins: [
        commonsPlugin,
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'src/index.html'
        })
    ],
    module: {
        loaders: [
            { test: /\.css$/, loader: 'style-loader!css-loader' },
            { test: /\.html$/, loader: 'html' }
        ]
    },
    resolve: {
        root: __dirname,
        extensions: [ '', '.js' ]
    }
}