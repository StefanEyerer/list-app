module.exports = {
  displayName: 'backend-shared-feature-auth',
  testEnvironment: 'node',
  transform: {
    '^.+\\.[tj]s$': ['ts-jest', { tsconfig: '<rootDir>/tsconfig.spec.json' }],
  },
  moduleFileExtensions: ['ts', 'js', 'html'],
  coverageDirectory: '../../../../coverage/libs/backend/shared/feature-auth',
  preset: '../../../../jest.preset.ts',
};
