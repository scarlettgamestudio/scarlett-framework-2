const path = require("path");
const rootPath = path.join(__dirname, "../");

// fetches and creates the packages that do not have a custom build script within
const tsConfigReferences = require("../tsconfig").references;
const availablePackages = require("./scripts/fetchAvailablePackages")(tsConfigReferences);
const standardBuildPackages = require("./scripts/fetchNonCustomBuildPackages")(rootPath, availablePackages);
const createBuildEntries = require("./scripts/createBuildEntries")(standardBuildPackages);

module.exports = {
  entry: createBuildEntries("index.ts"),
  output: {
    filename: "[name]/dist/scarlett-[name].js",
    path: path.resolve("packages")
  }
};
