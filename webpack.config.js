const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin'); //引入htmlWebpackplugin包
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
    mode: "production",
    // performance: {
    //     hints: false,
    //     maxAssetSize: 200000,
    //     maxEntrypointSize: 400000,
    //     assetFilter: (assetFilename)=>{
    //         return assetFilename.endsWith('.css') || assetFilename.endsWith('.js')
    //     }
    // },
    entry: './lib/index.tsx',
    output: {
        path: path.resolve(__dirname,'build/lib'), //这边之所以不能直接写path,是因为在每个不同的系统中写法不同
        filename: "[name].[hash:4].js",
        library: 'react-wheel',
        libraryTarget: 'umd', //umd 是什么？
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: "awesome-typescript-loader"
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: "./public/index.html" //模板文件自己选，自己写
        })
    ],
    externals: {
        react: {
            commonjs: 'react',
            commonjs2: 'react',
            amd: 'react',
            root: 'React',
        },
        'react-dom': {
            commonjs: 'react-dom',
            commonjs2: 'react-dom',
            amd: 'react-dom',
            root: 'ReactDOM',
        },
    }
}