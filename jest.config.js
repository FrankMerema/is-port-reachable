module.exports = {
  reporters: ['default', ['jest-junit', { outputDirectory: 'coverage/jest', outputName: 'results.xml' }]],
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  },
  moduleFileExtensions: [
    'ts',
    'js'
  ],
  testRegex: '^.+\\.spec\\.ts$',
  coverageDirectory: './coverage/jest/lcov',
  collectCoverage: true,
  collectCoverageFrom: [
    '**/*.ts'
  ]
};
