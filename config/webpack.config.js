const path = require('path');
const glob = require('glob');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    'scarlett-commons': glob.sync('./packages/commons/index.ts'),
    'scarlett-core': glob.sync('./packages/core/index.ts'),
  },
  output: {
    filename: '[name].js',
    path: path.resolve('build'),
  },
  resolve: {
    // Look for modules in .ts files first
    extensions: ['.js', '.ts', '.json'],
    // Add 'src' to our modules, as all our app code will live in there, so Webpack should look in there for modules
    modules: ['packages', 'node_modules'],
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [['@babel/preset-env', { targets: { node: 'current' } }], '@babel/typescript'],
            plugins: ['@babel/proposal-class-properties', '@babel/proposal-object-rest-spread'],
          },
        },
      },
    ],
  },
  plugins: [new ForkTsCheckerWebpackPlugin()],
};
