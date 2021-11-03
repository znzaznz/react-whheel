const base = require('./webpack.config')
const HtmlWebpackPlugin = require('html-webpack-plugin'); //引入htmlWebpackplugin包
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = Object.assign({},base,{
    mode:"development",
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: "./public/index.html" //模板文件自己选，自己写
        })
    ],
})