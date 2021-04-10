
const path = require('path')

module.exports = {
  entry: {
    app: [
      '@babel/polyfill', 
      './assets/js/index.js',
      './assets/js/test.js'
    ]
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'index.js'
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['@babel/preset-env']
        }
      }
    ]
  }
}

// multi entry, multi-out