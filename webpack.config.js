const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const cssLoader = ()=>{

    return [
        process.env.NODE_ENV ? 'style-loader' : MiniCssExtractPlugin.loader ,
        "css-loader",
        {
            loader: "postcss-loader",
            options: {
                postcssOptions: {
                    plugins: [
                        ['postcss-preset-env',{stage: 3}]
                    ]
                }
            }
        }
    ]
}

module.exports = {
    mode: 'production',
    entry: './lib/index.tsx',
    output: {
        path: path.resolve(__dirname, 'build/lib'), //这边之所以不能直接写path,是因为在每个不同的系统中写法不同
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
            },
            {
                test: /.s[ac]ss$/i,
                use: [
                    ...cssLoader(),
                    'sass-loader'
                ]
            },
            {
                test: /\.svg$/,
                loader: "svg-sprite-loader"
            }
        ]
    },
}