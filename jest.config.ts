import { pathsToModuleNameMapper } from 'ts-jest/utils';

import { compilerOptions } from './tsconfig.json';

export default {
  bail: true,
  clearMocks: true,
  coverageProvider: 'v8',
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
    prefix: '<rootDir>/src/',
  }),
  preset: 'ts-jest',
  testEnvironment: 'node',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  testMatch: ['**/*.spec.ts'],
  watchPathIgnorePatterns: ['node_modules'],
  transformIgnorePatterns: ['node_modules'],
  collectCoverageFrom: ['src/modules/**/useCases/**/*.ts', '!src/**/index.ts'],
};
