// fetches all the packages and their paths (e.g., declared within ts.config.json)
module.exports = (references = []) => {
  if (references.length === 0) return references;

  return references.map(package => package.path || "");
};
