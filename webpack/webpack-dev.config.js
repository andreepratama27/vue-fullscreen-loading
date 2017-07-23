const webpack = require('webpack')
const path = require('path')
const htmlPlugin = require('html-webpack-plugin')

module.exports = {

  entry: path.resolve('src/main.js'),

  devServer: {
    port: 1000,
    inline: true
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
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
        test: /\.s[a|c]ss$/,
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
