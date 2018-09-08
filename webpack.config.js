const path = require('path');
const glob = require("glob");

module.exports = {
    entry: {
      "scarlett-core" : glob.sync("./packages/core/src/**/*.js")
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    }
};