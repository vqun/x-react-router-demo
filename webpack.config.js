const path = require("path");
const fs = require("fs");
const webpack = require('webpack');

const examples = path.join(__dirname, 'examples');

function createEntries(entries, dir) {
  fs.readdirSync(dir).reduce((entries, file) => {
    const { ext, name } = path.parse(file);
    if(ext === '.js') {
      entries[name === 'app' ? path.parse(dir).name : name] = path.join(dir, file);
    }
    return entries;
  }, entries);
}

const entries = fs.readdirSync(examples).reduce(function (entries, dir) {
  if(dir === 'com') return entries;
  const D = path.join(examples, dir);
  if (fs.statSync(D).isDirectory()) {
    createEntries(entries, D);
  }
  return entries;
}, {});

const webpackConfig = {
  context: __dirname,
  entry: entries,
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
  resolve: {
    alias: fs
        .readdirSync(examples)
        .reduce(function(alias, dir) {
          const D = path.join(examples, dir);
          if (fs.statSync(D).isDirectory() && dir !== '__com__') {
            alias['@' + dir] = D;
         }
         return alias;
        }, { '@com': path.join(examples, 'com') })
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'base',
      // children: true,
      minChunks: Infinity,
    })
  ],
  devtool: 'inline-source-map'
};

webpackConfig.entry['base'] = [
  'react',
  'react-dom',
  'x-react-router'
];

module.exports = webpackConfig;