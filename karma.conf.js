module.exports = config => {

  config.set({

    browsers: [
      'PhantomJS'
    ],

    frameworks: ['jasmine'],

    files: ['spec/**/*.js'],

    reporters: ['spec'],

    preprocessors: {
      'spec/**/*.js': ['webpack']
    },

    webpack: {
      resolve: {
        alias: {
          'vue$': 'vue/dist/vue'
        }
      },

      module: {
        rules: [
          {
            test: /\.js$/,
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
            test: /\.s(a|c)ss$/,
            loader: 'css-loader!sass-loader'
          }
        ]
      }
    },

    singleRun: true
  })
}
