const path = require('path')

module.exports = {
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
}