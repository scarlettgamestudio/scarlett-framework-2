module.exports = api => {
  const env = api.env();

  let presets = [];
  let plugins = [];

  switch (env) {
    case "test": {
      presets = ["@babel/preset-env"];
      break;
    }
  }

  return {
    presets,
    plugins
  };
};
