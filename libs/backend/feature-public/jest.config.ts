module.exports = {
  testEnvironment: 'node',
  displayName: 'backend-feature-public',
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.spec.json',
    },
  },
  transform: {
    '^.+\\.[tj]s$': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'js', 'html'],
  coverageDirectory: '../../../coverage/libs/backend/feature-public',
  preset: '../../../jest.preset.ts',
};
