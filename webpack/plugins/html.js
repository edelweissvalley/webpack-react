const HtmlWebpackPlugin = require('html-webpack-plugin');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');

module.exports = (pathToSource) => ({
  plugins: [
    new HtmlWebpackPlugin({
      template: `${pathToSource}/index.html`,
      inject: 'head',
    }),
    new ScriptExtHtmlWebpackPlugin({defer: 'index'}),
  ],
});
