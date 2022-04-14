const HTMLWbpackPlugin = require('html-webpack-plugin');

const path = require('path');
const paths = require('./paths');

module.exports = webpackEnv => {
  const isEnvDevelopment = webpackEnv === 'development';

  const config = {
    mode: isEnvDevelopment ? 'development' : 'production',
    entry: {
      index: paths.appIndex
    },
    output: {
      path: path.resolve(paths.appPath, 'dist'),
      filename: '[name].bundle.js',
    },
    plugins: [
      new HTMLWbpackPlugin({
        template: paths.appHtml,
      }),
    ],
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
        {
          test: /\.html$/,
          use: {
            loader: 'html-loader',
          },
        },
      ],
    },
    resolve: {
      extensions: [".ts", ".js"]
    }
  };

  return config;
};
