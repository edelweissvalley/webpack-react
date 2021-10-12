import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export default {
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[chunkhash].css',
      chunkFilename: '[name].[chunkhash].css',
    }),
  ],
};
