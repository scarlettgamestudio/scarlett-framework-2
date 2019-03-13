const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");

module.exports = {
  // devtool is already set with -d (debug) and removed with -p (production) flags from webpack and webpack dev server
  // devtool: 'source-map',

  // Output the bundled JS as UMD (Universal Module definition)
  output: {
    // export itself to UMD format
    libraryTarget: "umd",
    umdNamedDefine: true,
    // fix for https://github.com/webpack/webpack/issues/6525
    globalObject: `(self || this)`
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
            // This is needed so subpackages are able to find the config
            // individual packages can still have custom rules using "overrides" or "babelrcRoots"
            rootMode: "upward"
          }
        }
      }
    ]
  },
  plugins: [new ForkTsCheckerWebpackPlugin()]
};
