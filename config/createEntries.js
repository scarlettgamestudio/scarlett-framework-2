const path = require("path");

module.exports = paths => entryFilename => {
  let result = {};

  paths.map(p => {
    const slashIndex = p.lastIndexOf("/");
    const packageFolder = p.substr(slashIndex + 1);
    result[packageFolder] = "./" + path.join(p, entryFilename);
  });

  return result;
};
