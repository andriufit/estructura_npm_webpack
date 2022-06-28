const path = require('path');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    plugins: [
        new MiniCSSExtractPlugin({
            filename: "../css/style.css",
        })
    ],
    output: {
        path: path.resolve(__dirname, 'js'),
        filename: 'script.js'
    },
    entry: {
        main: './src/js/script.js'
    },
    module: {
        rules: [
            { 
              test: /\.css$/, 
              loader: [
                MiniCSSExtractPlugin.loader,
                "css-loader"
              ]
            },
            { 
                test: /\.scss$/, 
                loader: [
                  MiniCSSExtractPlugin.loader,
                  "css-loader",
                  'sass-loader'
                ]
            },
            {
              test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
              include: path.resolve(__dirname, './node_modules/bootstrap-icons/font/fonts'),
              use: {
                  loader: 'file-loader',
                  options: {
                      name: '[name].[ext]',
                      outputPath: '../fonts',
                      publicPath: '../fonts',
                  },
            }
          }
        ],
    }
}