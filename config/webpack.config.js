const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");

const path = require("path");
const rootPath = path.join(__dirname, "../");

// fetches and creates the packages that do not have a custom build script within
const tsConfigReferences = require("../tsconfig").references;
const availablePackages = require("./scripts/fetchAvailablePackages")(tsConfigReferences);
const standardBuildPackages = require("./scripts/fetchNonCustomBuildPackages")(rootPath, availablePackages);
const createBuildEntries = require("./scripts/createBuildEntries")(standardBuildPackages);

module.exports = {
  mode: "development",
  entry: createBuildEntries("index.ts"),
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
