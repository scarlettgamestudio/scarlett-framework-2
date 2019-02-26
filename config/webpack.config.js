const path = require("path");
const tsConfig = require("../tsconfig");
const availablePackages = require("./fetchAvailablePackages")(tsConfig);
const createEntries = require("./createEntries")(availablePackages);
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");

module.exports = {
  mode: "development",
  entry: createEntries("index.ts"),
  output: {
    library: "SC",
    // export itself to UMD format
    libraryTarget: "umd",
    umdNamedDefine: true,
    filename: "[name]/dist/scarlett-[name].js",
    path: path.resolve("packages"),
    // fix for https://github.com/webpack/webpack/issues/6525
    globalObject: `(typeof self !== 'undefined' ? self : this)`
  },
  resolve: {
    // Look for modules in .ts files first
    extensions: [".js", ".ts", ".json"],
    // Add 'src' to our modules, as all our app code will live in there, so Webpack should look in there for modules
    modules: ["packages", "node_modules"]
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [["@babel/preset-env", { targets: { node: "current" } }], "@babel/typescript"],
            plugins: ["@babel/proposal-class-properties", "@babel/proposal-object-rest-spread"]
          }
        }
      }
    ]
  },
  plugins: [new ForkTsCheckerWebpackPlugin()]
};
