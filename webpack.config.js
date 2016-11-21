var path = require("path");
var fs = require("fs");

var examples = path.join(__dirname, 'examples');

module.exports = {
  context: __dirname,
  entry: fs.readdirSync(examples).reduce(function (entries, dir) {
    if (fs.statSync(path.join(examples, dir)).isDirectory() && dir !== '__com__') {
      entries[dir] = path.resolve('./examples', dir, 'app.js');
    }
    return entries;
  }, {}),
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "[name].js"
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loader: 'babel'
    }]
  },
  devtool: 'inline-source-map'
};