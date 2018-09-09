const path = require('path');
const glob = require('glob');

module.exports = {
    mode: 'development',
    entry: {
      "scarlett-commons" : glob.sync('./packages/commons/src/**/*.js'),
      "scarlett-core" : glob.sync('./packages/core/src/**/*.js')
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env']
              }
            }
          }
        ]
      }
};