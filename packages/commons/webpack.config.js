const path = require("path");
const webpackMerge = require("webpack-merge");
const baseConfig = require("../../config/webpack.base");

module.exports = (env = {}) => {
  // use UMD configuration by default
  let custom = {
    entry: "./index.ts",
    output: {
      filename: "scarlett-commons.js",
      path: path.resolve(__dirname, "./dist")
    },
    resolve: {
      // append 'src' to our modules
      modules: ["src"]
    },
    externals: ["fs"]
  };

  // could apply some smart rules to the merging
  // by default it's appending the modules ('src') for instance
  const result = webpackMerge(baseConfig, custom);

  return result;
};
