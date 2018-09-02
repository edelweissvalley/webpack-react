const HtmlWebpackPlugin = require('html-webpack-plugin');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');

const { sourcePath } = require('../paths');

module.exports = {
  plugins: [
    new HtmlWebpackPlugin({
      template: `${sourcePath}/index.html`,
      inject: 'head',
    }),
    new ScriptExtHtmlWebpackPlugin({ defer: 'index' }),
  ],
};
