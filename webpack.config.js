var path = require('path');
var webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const config = {
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
        options: { limit: 50000, },
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: { presets: ['es2015'] }
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
  plugins: [
    new UglifyJSPlugin(),
  ],
  node: {
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    Buffer: false,
    'crypto': 'empty'
  },
  devtool: 'inline-source-map'
};

const index_cfg = Object.assign({}, config, {
   entry: './js/index.js',
   output: {
     path: path.resolve(__dirname, '.'),
     filename: 'binary.js',
     libraryTarget: 'umd'
   },
});
const index_isolated_cfg = Object.assign({}, config, {
   entry: './js/index.isolated.js',
   output: {
     path: path.resolve(__dirname, '.'),
     filename: 'binary.isolated.js',
     libraryTarget: 'umd'
   },
});
const index_more_cfg = Object.assign({}, config, {
   entry: './js/index.more.js',
   output: {
     path: path.resolve(__dirname, '.'),
     filename: 'binary.more.js',
     libraryTarget: 'umd'
   },
});

module.exports = [ index_cfg, index_isolated_cfg, index_more_cfg ];

