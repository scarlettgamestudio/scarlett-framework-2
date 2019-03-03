const path = require("path");
const webpackMerge = require("webpack-merge");
const commonConfig = require("../../config/webpack.common");

module.exports = (env = {}) => {
  // use UMD configuration by default
  let custom = {
    entry: "./index.ts",
    output: {
      filename: "scarlett-commons.min.js",
      path: path.resolve(__dirname, "./dist")
    },
    externals: ["fs"]
  };

  return webpackMerge(commonConfig, custom);
};
