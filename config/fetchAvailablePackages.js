module.exports = ({ references }) => {
  return references.map(package => package.path);
};
