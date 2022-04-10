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
const configFactory = require('../config/webpack.config');

const config = configFactory('production');
webpack(config, (err, stats) => {
  if (err) {
    console.error(`CompilError: ${err}`);
    return;
  }

  console.log(
    stats.toString({
      chunks: false,
      colors: true,
    })
  );
});
