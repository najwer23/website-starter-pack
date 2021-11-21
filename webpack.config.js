
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

var entryCustom = {};
let entryArr = ["style", "index"];
for (let i = 0; i < entryArr.length; i++) {
  entryCustom[entryArr[i]] = path.resolve(__dirname, './assets/js/' + entryArr[i] + '.js')
}

module.exports = {
  entry: entryCustom,
  output: {
    path: path.resolve(__dirname, './build'),
    filename: '[name].bunde.js'
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        styles: {
          name: "styles",
          type: "css/mini-extract",
          chunks: "all",
          enforce: true,
        },
      },
    },
    minimizer: [
      '...',
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      linkType: "text/css",
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "index.html"),
      favicon: "./assets/img/f.png",
    })
  ],
  module: {
    rules: [
      {
        test: /\.js?$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ['file-loader']
      },
      {
        test: /\.(sass|scss|css)$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", 'sass-loader'],
      },
      {
        test: /\.(?:ico|gif|svg|png|jpg|jpeg)$/i,
        type: 'asset/resource',
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'assets/img/',
              publicPath: 'assets/img/'
            }
          }
        ]
      },
    ]
  },
}