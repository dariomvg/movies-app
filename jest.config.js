const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './', 
});

const customJestConfig = {
  testEnvironment: 'jest-environment-jsdom', 
  moduleNameMapper: {
    
    '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',
   
    '^.+\\.(jpg|jpeg|png|gif|webp|avif|svg|ico|bmp|tiff|woff|woff2|eot|ttf|otf)$':
      '<rootDir>/__mocks__/fileMock.js',
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'], 
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'], 
};

module.exports = createJestConfig(customJestConfig);
