const path = require('path')

module.exports = {
  entry: {
    app: [
      '@babel/polyfill', 
      './assets/js/index.js'
    ],
    styleMain: [
      './assets/js/style.js'
    ]
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
          }
        ]
      },
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['@babel/preset-env']
        }
      },
      {
        test: /\.css?$/,
        loader: 'style-loader!css-loader'
      }
    ]
  }
}

// https://github.com/webpack/webpack/issues/1732