import HtmlWebpackPlugin from 'html-webpack-plugin';
import path from 'node:path';

export default {
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(import.meta.dirname, './index.html'),
      inject: 'head',
    }),
  ],
};
