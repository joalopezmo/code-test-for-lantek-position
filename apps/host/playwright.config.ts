import { workspaceRoot } from '@nx/devkit';
import { nxE2EPreset } from '@nx/playwright/preset';
import { defineConfig } from '@playwright/test';

// For CI, you may want to set BASE_URL to the deployed application.
const baseURL = 'http://localhost:5250/';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// require('dotenv').config();

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  ...nxE2EPreset(__filename, { testDir: './e2e' }),
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */

  /* Run your local dev server before starting the tests */
  webServer: {
    command: 'nx serve host --port=5250',
    url: baseURL,
    reuseExistingServer: !process.env.CI,
    cwd: workspaceRoot,
    timeout: 120 * 1000,
  },
  use: {
    baseURL,
    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',
  },
});
