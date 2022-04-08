const HTMLWbpackPlugin = require('html-webpack-plugin');

const path = require('path');
const paths = require('./paths');

module.exports = (webpackEnv) => {
  const config = {
    entry: paths.appIndex,
    output: {
      path: path.resolve(paths.appPath, 'dist'),
      filename: 'app.js',
    },
    plugins: [
      new HTMLWbpackPlugin({})
    ]
  }

  return config;
}