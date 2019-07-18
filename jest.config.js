module.exports = {
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
