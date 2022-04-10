const fs = require('fs');
const path = require('path');

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

module.exports = {
  appPath: resolveApp('.'),
  appIndex: resolveApp('src/index.ts'),
  appPublic: resolveApp('public'),
  appIndex: resolveApp('public/index.html'),
};
