import type { Config } from 'jest';

const config: Config = {
  verbose: true,
  displayName: 'Organ Rebate System',
  preset: 'ts-jest',
  collectCoverageFrom: ['__tests__/**/*.test.ts'],
  testEnvironment: 'node',
  testMatch: ['**/__tests__/**/*.ts?(x)', '**/?(*.)+(test).ts?(x)'],
  extensionsToTreatAsEsm: ['.ts'],
  transform: {
    '(/__tests__/.*|(\\.|/)(test))\\.ts?$': 'ts-jest',
  },
  rootDir: './__tests__'
};

export default config;
