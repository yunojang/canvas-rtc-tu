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
const configFactory = require('../config/webpack.config');

const host = process.env.HOST ?? '0.0.0.0';
const port = process.env.PORT ?? 5000;

const config = configFactory('devlopment');
const compiler = webpack(config);

const server = new WebpackDevServer({
  port, host
}, compiler);

server.startCallback(()=> {
  console.log(`Starting server on http://${host}:${port}`);
})

// compiler.run((err, stat) => {
//   if (err) {
//     console.log(err);
//   }
//   process.exit(1);
// });