'use strict';

process.env.BABLE_ENV = 'development';
process.env.NODE_ENV = 'development';

// Makes the script crash on unhandled rejections instead of silently
// ignoring them. In the future, promise rejections that are not handled will
// terminate the Node.js process with a non-zero exit code.
process.on('unhandledRejection', err => {
  throw err;
});

const { webpack } = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const paths = require('../config/paths');
const configFactory = require('../config/webpack.config');

const host = process.env.HOST ?? '0.0.0.0';
const port = process.env.PORT ?? 5000;

const config = configFactory('devlopment');
const compiler = webpack(config);

const devServerOptions = {
  port,
  host,
};

const server = new WebpackDevServer(devServerOptions, compiler);

server.startCallback(() => {
  console.log(`Starting server on http://${host}:${port}`);
});
