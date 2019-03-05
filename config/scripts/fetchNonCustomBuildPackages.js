const buildScriptExists = require("./buildScriptExists");

// filters (removes) the packages that contain a custom build script in their package.json
module.exports = (rootPath, paths) => {
  return paths.filter(p => !buildScriptExists(rootPath, p));
};
