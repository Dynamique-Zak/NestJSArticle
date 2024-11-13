module.exports = {
    moduleFileExtensions: ['js', 'json', 'ts'],
    rootDir: '.',
    testRegex: '.*\\.steps\\.ts$', // Correspond aux fichiers contenant les étapes Cucumber
    transform: {
      '^.+\\.(t|j)s$': 'ts-jest',
    },
    collectCoverageFrom: ['**/*.(t|j)s'],
    testEnvironment: 'node',
    modulePaths: ['<rootDir>'],
  };
  