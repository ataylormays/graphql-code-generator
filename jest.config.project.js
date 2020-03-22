const { resolve } = require('path');
const { pathsToModuleNameMapper } = require('ts-jest/utils');

const ROOT_DIR = __dirname;
const tsconfig = require(resolve(ROOT_DIR, 'tsconfig.json'));
const CI = !!process.env.CI;

module.exports = ({ dirname }) => {
  const pkg = require(resolve(dirname, 'package.json'));
  const displayName = pkg.name.replace('@graphql-codegen/', '');

  return {
    displayName,
    preset: 'ts-jest',
    testEnvironment: 'node',
    rootDir: dirname,
    globals: {
      'ts-jest': {
        diagnostics: false,
        tsConfig: 'tsconfig.json',
      },
    },
    reporters: ['default'],
    modulePathIgnorePatterns: ['dist'],
    moduleNameMapper: pathsToModuleNameMapper(tsconfig.compilerOptions.paths, { prefix: `${ROOT_DIR}/` }),
    cacheDirectory: resolve(ROOT_DIR, `${CI ? '' : 'node_modules/'}.cache/jest`),
    collectCoverage: false,
  };
};