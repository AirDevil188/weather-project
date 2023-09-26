const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode: 'development',
    entry: { 
        bundle: path.resolve(__dirname, 'src/index.js')
},
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[contenthash].js',
        clean: true,
        assetModuleFilename: '[name][ext]'
    },
    devtool: "source-map",
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist')
        },
        port: 3000,
        watchFiles: ["./src/*"],
        open: true,
        hot: true,
        compress: true,
        historyApiFallback: true,
    },
    module: {
        rules: [
            {
                
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
                  
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    },
                },
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'assets/resource'
            }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "Weather App",
            filename: "index.html",
            template: "src/template.html"
        }),
        new MiniCssExtractPlugin({}),
    ]
}

