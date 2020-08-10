module.exports = {

  // The directory where Jest should output its coverage files
  coverageDirectory: 'coverage',

  // A list of reporter names that Jest uses when writing coverage reports
  coverageReporters: ['text-summary', 'lcov'],

  // The paths to modules that run some code to configure or set up the testing environment before each test
  // setupFiles: ['dotenv/config'],

  // The test environment that will be used for testing
  testEnvironment: 'node',

  // The glob patterns Jest uses to detect test files
  testMatch: ['**/src/**/*.test.js'],
};
