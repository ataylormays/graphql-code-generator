const { resolve } = require('path');
const { pathsToModuleNameMapper } = require('ts-jest/utils');

const ROOT_DIR = __dirname;
const TSCONFIG = resolve(ROOT_DIR, 'tsconfig.json');
const tsconfig = require(TSCONFIG);
const CI = !!process.env.CI;

module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  rootDir: ROOT_DIR,
  globals: {
    'ts-jest': {
      tsConfig: TSCONFIG,
    },
  },
  restoreMocks: true,
  reporters: ['default'],
  modulePathIgnorePatterns: ['dist'],
  moduleNameMapper: pathsToModuleNameMapper(tsconfig.compilerOptions.paths, { prefix: `${ROOT_DIR}/` }),
  cacheDirectory: resolve(ROOT_DIR, `${CI ? '' : 'node_modules/'}.cache/jest`),
  collectCoverage: false,
};
