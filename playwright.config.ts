import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './Sandbox/Spec',
  testMatch:['downloadFile.spec.ts'],
  timeout: 5 *60* 1000,
  // expect: {
    
  //   timeout: 25000
  // },
  
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: [['html',{
    open:'always'
  }],['dot'],['json',{
    outputFile:'JsonOutPutFolder/output-file'
  }]],
  use: {

    trace: 'on',
    headless:false,
    screenshot:'on',
    video:'on',
    // baseURL:"https://demoblaze.com/index.html",
    baseURL:"https://practice-automation.com/"

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
  //   url: 'http://127.0.0.1:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
