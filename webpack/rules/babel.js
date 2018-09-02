module.exports = {
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
                [
                  '@babel/preset-env',
                  {
                    useBuiltIns: 'usage',
                    corejs: 3,
                    modules: false,
                    loose: true,
                  }
                ],
              ],
              plugins: [
                'react-hot-loader/babel',
                '@babel/plugin-proposal-object-rest-spread',
                '@babel/plugin-proposal-class-properties',
              ],
            },
          },
        ],
      },
    ],
  },
};
