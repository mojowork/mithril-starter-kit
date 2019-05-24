const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    app: './src/app.js'
  },

  output: {
    filename: '[name]-[hash:7].js',
    path: path.resolve(__dirname, 'dist')
  },

  module: {
    rules: [
      {
        test:/\.jsx?$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test:/\.(scss|sass)$/,
        use: [
          { loader: 'style-loader', options: { sourceMap: true } },
          { loader: 'css-loader', options: { sourceMap: true } },
          { loader: 'postcss-loader', options: { sourceMap: true } },
          { loader: 'sass-loader', options: { sourceMap: true } }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html'
    })
  ]
};