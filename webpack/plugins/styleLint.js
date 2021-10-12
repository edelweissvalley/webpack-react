import StyleLintPlugin from 'stylelint-webpack-plugin';
import path from 'node:path';

import { rootPath } from '../paths.js';

export default {
  plugins: [
    new StyleLintPlugin({
      configFile: path.resolve(rootPath, '.stylelintrc.json'),
      files: './src/**/*.pcss',
      quiet: false,
    }),
  ],
};
