const path = require("path");

module.exports = {
  parser: "babel-eslint",
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module"
  },
  env: {
    browser: true,
    es6: true,
    jest: true
  },
  extends: ["eslint:recommended", "plugin:import/errors", "plugin:import/warnings"],
  plugins: ["jest"],
  rules: {
    "no-console": 0,
    "max-len": ["error", 120]
  },
  settings: {
    "import/resolver": {
      webpack: {
        config: path.resolve("./config/webpack.config.js")
      }
    }
  }
};
