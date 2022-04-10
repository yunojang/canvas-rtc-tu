const HTMLWbpackPlugin = require('html-webpack-plugin');

const path = require('path');
const paths = require('./paths');

module.exports = webpackEnv => {
  const isEnvDevelopment = webpackEnv === 'development';

  const config = {
    mode: isEnvDevelopment ? 'development' : 'production',
    entry: paths.appIndex,
    output: {
      path: path.resolve(paths.appPath, 'dist'),
      filename: 'app.js',
    },
    plugins: [new HTMLWbpackPlugin()],
    module: {
      rules: [
        {
          test: /\.(js|ts)$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-typescript'],
            },
          },
        },
      ],
    },
  };

  return config;
};
