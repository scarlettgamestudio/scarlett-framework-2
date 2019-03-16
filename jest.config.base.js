module.exports = {
  testEnvironment: "node",
  roots: ["<rootDir>/src", "<rootDir>/__tests__"],
  testRegex: "./[^/]+/__tests__/.+\\.(test|spec)\\.(ts|js)$",
  moduleFileExtensions: ["ts", "js", "json"],
  moduleDirectories: ["node_modules", "packages"],
  collectCoverage: true,
  collectCoverageFrom: ["!**/dist/**", "!**/node_modules/**", "!index.ts", "**/*.ts"],
  coverageThreshold: {
    global: {
      branches: 0,
      functions: 0,
      lines: 0,
      statements: 0
    }
  },
  globals: {
    window: false
  },
  testRunner: "jest-circus/runner"
};
