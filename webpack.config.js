const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {

  entry: {
    app: './src/app.js'
  },

  output: {
    filename: 'app.[hash:7].js',
    path: path.resolve(__dirname, 'dist')
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
       {
        test: /\.less$/,
        use: [{
          loader: "style-loader"
        },
        {
          loader: "css-loader", 
          options: {
            sourceMap: true
          }
        },
        {
          loader: "postcss-loader", 
          options: {
            ident: 'postcss',
            plugins: (loader) => [
              require('autoprefixer')(),
              require('cssnano')()
            ]
          }
        },
        {
          loader: "less-loader", 
          options: {
            sourceMap: true
          }
        }]
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html'
    })
  ]
}