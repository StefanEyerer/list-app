module.exports = {
  displayName: 'frontend-web-shared-ui',
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.spec.json',
    },
  },
  transform: {
    '^.+\\.[tj]sx?$': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../../../../coverage/libs/frontend/web/shared/ui',
  preset: '../../../../../jest.preset.ts',
};
