module.exports = {
  reporters: [
    'default',
    [
      'jest-junit',
      { outputDirectory: 'coverage/jest', outputName: 'results.xml' }
    ]
  ],
  transform: {
    '^.+\\.ts?$': 'ts-jest'
  },
  moduleFileExtensions: ['ts', 'js'],
  testRegex: '^.+\\.spec\\.ts$',
  coverageDirectory: './coverage/jest/lcov',
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.ts']
};
