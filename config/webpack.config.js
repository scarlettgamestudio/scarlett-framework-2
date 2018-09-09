const path = require("path");
const glob = require("glob");

module.exports = {
  mode: "development",
  entry: {
    "scarlett-commons": glob.sync("./packages/commons/index.js"),
    "scarlett-core": glob.sync("./packages/core/src/**/*.js")
  },
  output: {
    filename: "[name].js",
    path: path.resolve("build")
  },
  resolve: {
    // Look for modules in .js files first
    extensions: [".js", ".json"],
    // Add 'src' to our modules, as all our app code will live in there, so Webpack should look in there for modules
    modules: ["packages", "node_modules"]
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      }
    ]
  }
};
