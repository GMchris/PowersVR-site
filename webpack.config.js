const webpack = require('webpack');
const path = require('path');

const APP_DIR = path.resolve(__dirname);

const ExtractTextPlugin = require("extract-text-webpack-plugin");

const extractSass = new ExtractTextPlugin({
    filename: "style.css"
});

module.exports = {
    entry: APP_DIR + '/js/index.js',
    output: {
        path: APP_DIR,
        filename: 'bundle.js'
    },
    module : {
        loaders : [
            {
                test : /\.js/,
                include : APP_DIR + '/js',
                loader : 'babel'
            }, {
              test: /\.scss$/,
              loader: 'style-loader!css-loader!sass-loader'
            }, {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loaders: ['file-loader?context=src/images&name=public/images/[name].[ext]', {
                    loader: 'image-webpack-loader',
                    query: {
                        mozjpeg: {
                            progressive: true,
                        },
                        gifsicle: {
                            interlaced: false,
                        },
                        optipng: {
                            optimizationLevel: 4,
                        },
                        pngquant: {
                            quality: '75-90',
                            speed: 3,
                        },
                    },
                }],
                exclude: /node_modules/,
                include: __dirname,
            }, {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                loader: 'file-loader?name=public/fonts/[name].[ext]'
            }
        ]
    },
    plugins: [
      extractSass
    ]
};
