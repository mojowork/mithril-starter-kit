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

    entry: {
        index: './src/index.js'
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
                test: /\.(png|gif|jpe?g)$/i,
                use: [{
                    loader: 'url-loader',
                    options: {
                        name: '[name]-[hash:7].[ext]',
                        limit: 8192,
                        outputPath: 'assets/images'
                    }
                }]
            
            },
            {
                test: /\.(eot|svg|ttf|woff2?)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name]-[hash:7].[ext]',
                        outputPath: 'assets/fonts'
                    }
                }]
            
            },
            {
                test: /\.(c|le)ss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                          // you can specify a publicPath here
                          // by default it uses publicPath in webpackOptions.output
                          hmr: process.env.NODE_ENV === 'development',
                        },
                    },
                    {
                        loader: 'css-loader',
                        options: { sourceMap: true },
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            ident: 'postcss',
                            plugins: (loader) => [
                              require('autoprefixer')(),
                            //   require('cssnano')()
                            ]
                          }
                    },
                    {
                        loader: 'less-loader',
                        options: { sourceMap: true },
                    }
                ]
            }
        ]
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
            filename: '[name]-[hash:7].css',
        }),
        new PurifyCSSPlugin({
            // Give paths to parse for rules. These should be absolute!
            paths: glob.sync(path.join(__dirname, './src/views/*.js')),
        })
    ],
    // tree-shaking
    optimization: { 
        minimizer: [new UglifyJsPlugin()],
    },

    devServer: {
        open: true,
        hot: true,
        port: 8080,
        proxy: {
            '/api': "http://mojo.work/api",
            changeOrigin: true
        }
    },
}