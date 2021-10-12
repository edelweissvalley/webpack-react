export default {
  module: {
    rules: [
      {
        test: /\.(tsx|ts)?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/react',
                '@babel/preset-env'
              ],
              plugins: [
                '@babel/plugin-proposal-class-properties',
                '@babel/plugin-proposal-private-methods',
              ],
            },
          },
        ],
      },
    ],
  },
};
