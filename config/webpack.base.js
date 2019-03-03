const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
// the variable name from which the library should be accessed from
// when using a global var (ES6)
const globalLibraryName = "SC";

module.exports = {
  // devtool is already set with -d (debug) and removed with -p (production) flags from webpack and webpack dev server
  // devtool: 'source-map',

  // Output the bundled JS as UMD (Universal Module definition)
  output: {
    library: globalLibraryName,
    // export itself to UMD format
    libraryTarget: "umd",
    umdNamedDefine: true,
    // fix for https://github.com/webpack/webpack/issues/6525
    globalObject: `(typeof self !== 'undefined' ? self : this)`
  },
  resolve: {
    // Look for modules in .js files first
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
