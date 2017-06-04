const { root } = require('./helpers');

const { AotPlugin } = require('@ngtools/webpack');

/**
 * This is a server config which should be merged on top of common config
 */
module.exports = {
  entry: 
    root('./src/main.server.ts'),
    //{
    // app: root('./src/main.server.ts'),
    // vendor: root('./src/vendor.ts')
  //},
  output: {
    filename: 'server/server.js'
  },
  target: 'node'
};
