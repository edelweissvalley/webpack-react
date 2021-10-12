import { merge } from 'webpack-merge';

import { sourcePath, buildPath } from './paths.js';
import html from './plugins/html.js';
import babel from './rules/babel.js';
import files from './rules/files.js';
import typescript from './rules/typescript.js';

import path from 'node:path';

export default merge([
  {
    entry: {
      index: [
        'normalize.css',
        path.join(import.meta.dirname, './common.css'),
        `${sourcePath}/index.tsx`,
      ],
    },
    output: {
      path: buildPath,
      filename: '[name].[fullhash].js',
      chunkFilename: '[name].[fullhash].js',
      assetModuleFilename: 'files/[hash][ext]',
    },
    resolve: {
      alias: {
        'src': sourcePath,
        'components': `${sourcePath}/components`,
      },
      extensions: ['.ts', '.tsx', '.js'],
    },
    optimization: {
      splitChunks: {
        maxSize: 716800,
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            chunks: 'initial',
            name: 'vendor',
            enforce: true,
          },
        },
      },
    },
  },
  html,
  files,
  babel,
  typescript,
]);
