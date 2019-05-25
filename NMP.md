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
// postcss-loader 
{
    loader: "postcss-loader", 
    options: {
      ident: 'postcss',
      plugins: (loader) => [
        require('autoprefixer')(),
        require('cssnano')()
      ]
    }
}

npm install -D url-loader image-loader (images)

npm install -D html-webpack-plugin (plugins)

```
## Target Browsers
```
package.json

"browserslist": [ 
  "last 2 version",
	"> 1%",
]

```
