module.exports = {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.ts(x)?', '!src/**/*stories.tsx'],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
  moduleDirectories: ['node_modules', 'src'],
  moduleNameMapper: {
    d3: '<rootDir>/node_modules/d3/dist/d3.min.js'
  }
}
