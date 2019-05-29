## Npm Pageapge Install Map
```
npm install -D webpack webpack-cli (webpack)

npm install -D babel-loader @babel/core @babel/preset-env (babel)

{
    test: /\.jsx?$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env']
      }
    }
}

npm install -D style-loader css-loader postcss-loader autoprefixer  cssnano less less-loader  (less)
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
            loader: 'css-loader'
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
            loader: 'less-loader'
        }
    ]
}

npm install -D url-loader file-loader (images/font)

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

npm install -D html-webpack-plugin clean-webpack-plugin mini-css-extract-plugin (plugins)

  new HtmlWebpackPlugin({
      template: 'index.html',
      filename: 'index.html'
  }),
  new CleanWebpackPlugin(),

  new MiniCssExtractPlugin({
      filename: '[name]-[hash:7].css',
  }),

  npm install -D uglifyjs-webpack-plugin purifycss-webpack purify-css glob( tree-shaking )

```
## Target Browsers
```
package.json

"browserslist": [ 
  "last 2 version",
	"> 1%",
]

```

