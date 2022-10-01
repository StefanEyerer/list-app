module.exports = {
  displayName: 'backend-feature-lists',
  testEnvironment: 'node',
  transform: {
    '^.+\\.[tj]s$': ['ts-jest', { tsconfig: '<rootDir>/tsconfig.spec.json' }],
  },
  moduleFileExtensions: ['ts', 'js', 'html'],
  coverageDirectory: '../../../coverage/libs/backend/feature-lists',
  preset: '../../../jest.preset.ts',
  setupFilesAfterEnv: ['<rootDir>/jest-setup.ts'],
};
