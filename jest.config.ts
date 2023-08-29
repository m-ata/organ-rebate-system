import type { Config } from 'jest';

const config: Config = {
  displayName: 'Organ Rebate System',
  preset: 'ts-jest',
  coverageDirectory: './__tests__/coverage',
  testEnvironment: 'node',
  testMatch: ['**/?(*.)+(test).ts'],
  transform: {
    '(/__tests__/.*|(\\.|/)(test))\\.ts?$': 'ts-jest',
  },
};

export default config;
