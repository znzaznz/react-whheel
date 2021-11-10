const base = require('./webpack.config')
const HtmlWebpackPlugin = require('html-webpack-plugin'); //引入htmlWebpackplugin包
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = Object.assign({}, base, {
    mode: "development",
    devServer: {
        port: '8080',
        hot: true, //开启热更新
        compress: true,  //开启压缩
        open: true //每次打开webpack的时候就能打开页面
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: "./public/index.html" //模板文件自己选，自己写
        }),
    ],
})