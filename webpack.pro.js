const path = require("path");
const glob = require("glob-all");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
// tree-shaking
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const PurifyCSSPlugin = require("purifycss-webpack");

module.exports = {
  mode: "production",

  entry: {
    app: "./src/index.js"
  },

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name]-[hash:7].js"
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env"],
              plugins: [
                [
                  "transform-react-jsx",
                  {
                    pragma: "m"
                  }
                ]
              ]
            }
          }
        ]
      },
      {
        test: /\.(png|gif|jpe?g|svg)$/i,
        use: [
          {
            loader: "url-loader",
            options: {
              name: "[name]-[hash:7].[ext]",
              limit: 8192,
              outputPath: "assets/"
            }
          }
        ]
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
            loader: MiniCssExtractPlugin.loader
          },
          {
            loader: "css-loader"
            // Not Use modules
            // options: {
            //     modules: true,
            //     localIdentName: '[name]_[local]_[hash:7]'
            // },
          },
          {
            loader: "postcss-loader",
            options: {
              plugins: [require("autoprefixer")]
            }
          },
          {
            loader: "less-loader"
          }
        ]
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "index.html",
      filename: "index.html",
      minify: {
        removeAttributeQuotes: true,
        collapseWhitespace: true,
        removeComments: true
      }
    }),
    new webpack.ProvidePlugin({
      m: "mithril" //Global access
    }),
    new CleanWebpackPlugin(),

    new MiniCssExtractPlugin({
      filename: "[name]-[hash:7].css"
    }),
    new PurifyCSSPlugin({
      // Give paths to parse for rules. These should be absolute!
      paths: glob.sync([
        path.join(__dirname, "./src/views/*.js"),
        path.join(__dirname, "./src/views/**/*.js")
      ])
    })
  ],
  optimization: {
    minimizer: [
      new OptimizeCSSAssetsPlugin({
        // Css minimized
        cssProcessor: require("cssnano"),
        cssProcessorPluginOptions: {
          preset: [
            "default",
            {
              discardComments: {
                removeAll: true
              },
              normalizeUnicode: false
            }
          ]
        }
      }),
      // JS minimized
      new UglifyJsPlugin()
    ]
  }
};
