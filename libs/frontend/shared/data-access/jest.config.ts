module.exports = {
  displayName: 'frontend-shared-data-access',
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.[tj]s$': ['ts-jest', { tsconfig: '<rootDir>/tsconfig.spec.json' }],
  },
  moduleFileExtensions: ['ts', 'js', 'html'],
  coverageDirectory: '../../../../coverage/libs/frontend/shared/data-access',
  preset: '../../../../jest.preset.ts',
};
