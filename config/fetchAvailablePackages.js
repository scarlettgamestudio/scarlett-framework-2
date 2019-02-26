module.exports = (references = []) => {
  if (references.length === 0) return references;

  return references.map(package => package.path || "");
};
