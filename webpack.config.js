var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'dist');
var APP_DIR = path.resolve(__dirname, 'src');

var config = {
  entry: {
      app: APP_DIR + '/app.jsx',
      vendor: ['reselect', 'react', 'react-dom', 'redux', 'react-redux', 'immutable', 'redux-immutable']
  },
  output: {
    filename: "[name].bundle.js",
    path: __dirname + "/dist",
    publicPath: "/",            // New
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({ name: "vendor", filename: "vendor.bundle.js"})
  ],
  module : {
    loaders : [
      {
        test : /\.jsx?/,
        include : APP_DIR,
        loader : 'babel-loader'
      }
    ]
  }
};

module.exports = config;