const ZipWebpackPlugin = require('zip-webpack-plugin');

module.exports = {
  plugins: [new ZipWebpackPlugin({path: process.cwd(), filename: 'build.zip'})],
};
