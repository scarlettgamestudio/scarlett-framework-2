const path = require("path");

module.exports = {
  parser: "pluggable-babel-eslint",
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
    plugins: ["typescript"]
  },
  env: {
    browser: true,
    es6: true,
    jest: true
  },
  plugins: ["jest"],
  extends: ["eslint:recommended", "plugin:import/errors", "plugin:import/warnings", "plugin:jest/recommended"],
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
