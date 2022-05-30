module.exports = {
  testEnvironment: 'node',
  displayName: 'backend-feature-lists',
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.spec.json',
    },
  },
  transform: {
    '^.+\\.[tj]s$': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'js', 'html'],
  coverageDirectory: '../../../coverage/libs/backend/feature-lists',
  preset: '../../../jest.preset.ts',
  setupFilesAfterEnv: ['<rootDir>/jest-setup.ts'],
};
