import webpack from 'webpack';
import * as path from 'path';
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

const config: webpack.Configuration = {
    mode: 'development',
    entry: './src/index.ts',
    output: {
        path: path.resolve(__dirname, 'dist'),
        assetModuleFilename: '[name]-[hash][ext]',
        filename: '[name]-[hash].js',
        clean: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Sudoku,',
            template: './src/index.html',
            inject: 'body',
            scriptLoading: 'module',
        }),
        new MiniCssExtractPlugin(),
    ],
    module: {
        rules: [
            {
                test: /\.(sa|sc|c)ss$/,
                use: [MiniCssExtractPlugin.loader,'css-loader'],
            },
        ]
    },
    optimization: {
        runtimeChunk: 'single',
        splitChunks: {
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all',
                }
            }
        },
    }
};

export default config;