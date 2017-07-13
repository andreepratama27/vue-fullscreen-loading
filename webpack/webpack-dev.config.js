const path = require('path')
const webpack = require('webpack')
const htmlPlugin = require('html-webpack-plugin')

module.exports = {

  entry: path.resolve('src/main.js'),

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.scss$/,
        loader: 'css-loader!sass-loader'
      }
    ]
  },

  plugins: [
    new htmlPlugin({
      template: path.resolve('index.html'),
      filename: 'index.html',
      inject: 'body'
    })
  ]
}
