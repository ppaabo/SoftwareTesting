export default {
  collectCoverageFrom: ["src/*.js"],
  coveragePathIgnorePatterns: ["/node_modules/", "src/.internal/"],
  testPathIgnorePatterns: ["/node_modules/", "src/internal/"],
  verbose: true,
};
