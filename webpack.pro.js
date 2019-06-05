const path = require('path')
const glob = require('glob');
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
// tree-shaking
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const PurifyCSSPlugin = require('purifycss-webpack')

module.exports = {
  mode: 'production',

  entry: {
    app: './src/index.js'
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name]-[hash:7].js'
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
              plugins: [
                ['transform-react-jsx', {
                  'pragma': 'm',
                }],
              ],
            }
          }]
      },
      {
        test: /\.(png|gif|jpe?g|svg)$/i,
        use: [{
          loader: 'url-loader',
          options: {
            name: '[name].[ext]?[hash:7]',
            limit: 8192,
            outputPath: 'assets/'
          }
        }]

      },
      // {
      //     test: /\.(eot|svg|ttf|woff2?)$/,
      //     use: [{
      //         loader: 'file-loader',
      //         options: {
      //             name: '[name]-[hash:7].[ext]',
      //             outputPath: 'assets/fonts'
      //         }
      //     }]

      // },
      {
        test: /\.(le|c)ss$/,
        use: [
          {
            loader: 'css-hot-loader'
          },
          {
            loader: MiniCssExtractPlugin.loader
          },
          {
            loader: 'css-loader',
            // Not Use modules
            // options: { 
            //     modules: true,
            //     localIdentName: '[name]_[local]_[hash:7]'
            // },
          },
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: (loader) => [
                require('autoprefixer')(),
                require('cssnano')()
              ]
            }
          },
          {
            loader: 'less-loader',
          }
        ]
      }
    ]
  },
  optimization: {
    minimizer: [new UglifyJsPlugin()],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',
      filename: 'index.html'
    }),
    new webpack.ProvidePlugin({
      m: 'mithril', //Global access
    }),
    new CleanWebpackPlugin(),

    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
    new PurifyCSSPlugin({
      // Give paths to parse for rules. These should be absolute!
      paths: glob.sync(path.join(__dirname, './src/views/*.js')),
    })
  ]
}
