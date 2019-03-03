const path = require("path");
const fs = require("fs");

// checks for the existence of a 'build' script within package.json
module.exports = (rootPath, packagePath, filename = "package.json") => {
  const fullPath = path.join(rootPath, packagePath, filename);

  if (!fs.existsSync(fullPath)) {
    return false;
  }

  const file = fs.readFileSync(fullPath);
  const obj = JSON.parse(file);
  const scripts = obj.scripts || {};

  return scripts.build ? true : false;
};
