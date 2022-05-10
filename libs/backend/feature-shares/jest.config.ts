module.exports = {
  testEnvironment: 'node',
  displayName: 'backend-feature-shares',
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.spec.json',
    },
  },
  transform: {
    '^.+\\.[tj]s$': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'js', 'html'],
  coverageDirectory: '../../../coverage/libs/backend/feature-shares',
  preset: '../../../jest.preset.ts',
};
