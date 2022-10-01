module.exports = {
  displayName: 'frontend-web-shared-ui',
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.[tj]sx?$': ['ts-jest', { tsconfig: '<rootDir>/tsconfig.spec.json' }],
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../../../../coverage/libs/frontend/web/shared/ui',
  preset: '../../../../../jest.preset.ts',
};
