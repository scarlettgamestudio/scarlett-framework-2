module.exports = api => {
  const env = api.env();

  let envOpts = {
    // examples below
    //loose: true,
    //modules: false,
  };

  // maybe use the following for "production"
  //const nodeVersion = "8.15.0";

  switch (env) {
    case "test": {
      envOpts.targets = {
        node: "current"
      };
      break;
    }
    case "development": {
      envOpts.targets = {
        node: "current",
        browsers: ["last 2 versions"],
        esmodules: true
      };
      break;
    }
  }

  const config = {
    presets: [["@babel/preset-env", envOpts], "@babel/typescript"],
    plugins: ["@babel/proposal-class-properties", "@babel/proposal-object-rest-spread"]
  };

  return config;
};
