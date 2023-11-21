module.exports = {
    testMatch: ['**/(*.)(unit|spec).ts'],
    moduleFileExtensions: ['ts', 'tsx', 'js', 'json', 'jsx'],
    transform: {
      '^.+\\.(ts|tsx)$': 'ts-jest',
    },
    coverageDirectory: '<rootDir>/tests/unit/coverage',
    collectCoverageFrom: [
      'src/**/*.{js,vue}',
      '!**/node_modules/**',
      '!src/main.js',
      '!src/app.vue',
      '!src/router/index.js',
      '!src/router/routes.js',
      '!src/state/store.js',
      '!src/state/helpers.js',
      '!src/state/modules/index.js',
      '!src/components/_globals.js',
    ],
  }