module.exports = {
  module: {
    rules: [
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        loader: 'file-loader',
        options: {
          name: '[hash].[ext]',
          outputPath: 'img/',
          publicPath: './img/',
        },
      },
      {
        test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file-loader',
        options: {
          name: '[hash].[ext]',
          outputPath: 'fonts/',
          publicPath: './fonts/',
        },
      }
    ],
  },
};
