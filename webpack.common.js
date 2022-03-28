import path from 'path';
import htmlPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from "mini-css-extract-plugin";


export default {
    entry: './src/index.ts',
    output: {
        path: path.resolve('./build'),
        filename: 'bundle.js',
    },
    plugins: [
        new htmlPlugin({
            title: 'Dev mode',
        }),
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css",
        }),
    ],
    resolve: {
        extensions: ['.ts', '.tsx', '.js'],
    },
    module: {
        rules: [
            {
                test: /\.ts?$/,
                loader: "ts-loader",
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            },
        ],
    },
}
