const base = require("../../jest.config.base");
const customTransform = require.resolve("../../jestBabelTransform");

module.exports = {
  ...base,
  transform: {
    "^.+\\.(js|ts)$": customTransform
  },
  name: "scarlett-core",
  displayName: "scarlett-core"
};
