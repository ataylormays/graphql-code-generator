const CI = !!process.env.CI;

module.exports = CI
  ? require('./jest.project')({ __dirname })
  : {
      rootDir: __dirname,
      projects: ['<rootDir>/packages/**/*/jest.config.js'],
    };
