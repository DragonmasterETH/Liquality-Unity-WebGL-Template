const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        liqindex: './src/liqindex.js',
        liqsetup: './src/liqsetup.js'
    },
    devtool: 'inline-source-map',
    devServer: {
        hot: false,
        client: {
            progress: true,
        },
        port: 3005,
        liveReload: true,
        open: {
            app: {
                name: 'google-chrome',
            },
        },
    },
    plugins: [
        new webpack.ProvidePlugin({
            Buffer: ['buffer', 'Buffer'],
            process: "process/browser",
        }),
    ],
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    resolve: {
        fallback: {
            crypto: require.resolve("crypto-browserify"),
            stream: require.resolve("stream-browserify"),
            assert: require.resolve("assert"),
            buffer: require.resolve('buffer/'),
            process: require.resolve("process"),
            http: require.resolve("stream-http"),
            https: require.resolve("https-browserify"),
            os: require.resolve("os-browserify"),
            url: require.resolve("url"),
        },
    },
    module: {
        rules: [
          {
            test: /\.m?js$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: [
                  ['@babel/preset-env', { targets: "defaults" }]
                ]
              }
            }
          }
        ]
      }
};