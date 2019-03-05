const path = require("path");

// creates the webpack entries
// e.g., { core: './packages/core/index.ts' }
module.exports = paths => entryFilename => {
  let result = {};

  paths.map(p => {
    const slashIndex = p.lastIndexOf("/");
    const packageFolder = p.substr(slashIndex + 1);
    result[packageFolder] = "./" + path.join(p, entryFilename);
  });

  return result;
};
