// After converting to ES6 module syntax
// import { resolve, join } from 'path';
// import HtmlWebpackPlugin from 'html-webpack-plugin';
// export const entry = './src/index.js';
// export const output = {
//     filename: 'main.js',
//     path: resolve(__dirname, 'dist'),
// };
// export const devServer = {
//     contentBase: join(__dirname, 'dist'),
//     port: 9000,
//     open: true,
// };
// export const plugins = [
//     new HtmlWebpackPlugin({
//         template: './src/index.html',
//         inject: 'head',
//         scriptLoading: 'defer',
//     }),
// ];


// Below is the original code from the webpack documentation before converting to ES6 module syntax
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        port: 9000,
        open: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html',
            inject: 'head',
            scriptLoading: 'defer',
        }),
    ],
};