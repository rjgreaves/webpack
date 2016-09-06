var path = require('path');
var webpack = require('webpack');

var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('shared.js');

var ExtractTextPlugin = require('extract-texttext-webpack-plugin');

module.exports = {
    context: path.resolve('js'),
    entry: {
        about: './about_page.js',
        home: './home_page.js',
        contact: './contact_page.js'
    },
    output: {
        path: path.resolve('build/'),
        publicPath: '/public/assets/',
        filename: "[name].js"
    },

    plugins: [
        commonsPlugin,
        new ExtratTextPlugin("styles.css")
        ],

    devServer: {
        contentBase: 'public'
    },

    module: {
        preLoaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "jshint-loader"
            }
        ],
        loaders: [
            {
                test: /\.es6$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                loader: ExtractTextPlugin("style-loader", "autoprefixer-loader!css-loader");
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                loader: ExtractTextPlugin("style-loader", "css-loader!autoprefixer-loader!sass-loader");
            }
        ]
    },

    resolve: {
        extensions: ['', '.js', '.es6']
    }//,

    //watch: true
}