const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
 entry: './src/spike.jsx',
 output: {
   path: path.join(__dirname, '/dist'),
   filename: 'main.js'
 },
 devServer: {
   watchContentBase: true
 },
 module: {
   rules: [
     {
       test: /\.(js|jsx)$/,
       exclude: /nodeModules/,
       use: {
         loader: 'babel-loader'
       }
     },
     {
       test: /\.css$/,
       use: ['style-loader', 'css-loader']
     }
   ]
 },
 plugins: [new HtmlWebpackPlugin({ template: './spike.html' })],
};

