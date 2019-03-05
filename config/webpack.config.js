const webpackMerge = require("webpack-merge");

const baseConfig = require("./webpack.base");
const umdConfig = require("./webpack.umd");

module.exports = (env = {}) => {
  let config = {};

  // use umd configuration by default (browser, cjs, etc.)
  config = webpackMerge(baseConfig, umdConfig);

  return config;
};
