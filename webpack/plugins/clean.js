import { CleanWebpackPlugin } from 'clean-webpack-plugin';

import { buildPath } from '../paths.js';

export default {
  plugins: [
    new CleanWebpackPlugin({
      verbose: true,
      cleanOnceBeforeBuildPatterns: buildPath,
    }),
  ],
};
