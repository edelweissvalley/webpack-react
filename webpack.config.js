// process.traceDeprecation = true;
// node --trace-deprecation node_modules/webpack/bin/webpack.js
import { merge } from 'webpack-merge';

import postCss from './webpack/rules/postcss.js';
import extractCSS from './webpack/rules/css.extract.js';
import miniCssExtract from './webpack/plugins/miniCssExtract.js';
import clean from './webpack/plugins/clean.js';
import styleLint from './webpack/plugins/styleLint.js';
import terser from './webpack/plugins/terser.js';
import common from './webpack/common.js';

const dev = [
  {
    mode: 'development',
    devtool: 'eval-source-map',
    devServer: {
      hot: true,
      static: {
        publicPath: '/',
      },
    },
    stats: 'errors-warnings',
  },
  postCss,
  styleLint,
];

const prod = [
  { mode: 'production' },
  extractCSS,
  miniCssExtract,
  clean,
  terser,
];

export default (e) => (merge([common, ...(e && e.WEBPACK_SERVE ? dev : prod)]));
