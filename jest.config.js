module.exports = {
  reporters: ['default', ['jest-junit', { outputDirectory: 'coverage', outputName: 'results.xml' }]],
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  },
  moduleFileExtensions: [
    'ts',
    'js'
  ],
  testRegex: '^.+\\.spec\\.ts$',
  collectCoverage: true,
  collectCoverageFrom: [
    '**/*.ts'
  ]
};
