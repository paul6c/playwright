import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv';
import { format } from 'date-fns';


// compare to the dotenv.config() you need to add require so it always pick up the required env file.
require('dotenv').config({
  path: `env/.env.${process.env.ENV || 'local'}`, // I used this to get the env file based on the ENV variable passed in the npm script. If ENV is not passed, it will default to .env.local
});

const now: Date = new Date();
const formattedDate: string = format(now,"yyyy-MM-dd_HH-mm"); //I used the date-fns library to format the date
const monthFolder: string = format(now,"MMMM-yyyy");
/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: './tests',
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: [['html', {
        outputFolder: 'playwright-report/'+ monthFolder + '/' + formattedDate,
        open: 'never'}],

      ['json', { outputFile: 'results.json' }], 
      ['./utils/my-awesome-reporter.ts']],// this will only generate a json file that has a execution result of the tests
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  outputDir: 'screenshots/', // this will store the screenshots and videos
  use: {
    /* Base URL to use in actions like `await page.goto('')`. */
    baseURL: process.env.url,

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',
    screenshot: 'only-on-failure'
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },

    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://localhost:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
