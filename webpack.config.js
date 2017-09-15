 var path = require('path');
 var webpack = require('webpack');

 module.exports = [
   {
     entry: './js/index.js',
     output: {
       path: path.resolve(__dirname, '.'),
       filename: 'binary.js'
     },
     externals: {
       'jquery' : {
         commonjs: "jquery",
         commonjs2: "jquery",
         amd: "jquery",
         root: "jQuery"
       },
     },
     module: {
       loaders: [
         {
           test: /\.woff$/,
           loader: 'url-loader',
           options: {
             limit: 50000,
           },
         },
         {
           test: /\.js$/,
           loader: 'babel-loader',
           query: {
             presets: ['es2015']
           }
         },
         {
            test: /\.scss$/,
            use: [
              { loader: "style-loader" },
              { loader: "css-loader" },
              { loader: "sass-loader" }
            ]
        }
       ]
     },
     stats: {
       colors: true
     },
     devtool: 'source-map'
   }
 ];

