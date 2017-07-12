const webpack = require('webpack')
const htmlPlugin = require('webpack-html-plugin')

module.exports = {

  entry: 'src/main.js',

  output: {
    path: 'dist',
    filename: 'bundle.js'
  },

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
      template: 'src/index.html',
      filename: 'index.html',
      inject: 'body'
    })
  ]
}
