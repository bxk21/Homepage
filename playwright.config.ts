import { defineConfig, devices } from '@playwright/test';

const port = 3100;

export default defineConfig({
	testDir: './tests',
	fullyParallel: true,
	forbidOnly: !!process.env.CI,
	retries: process.env.CI ? 1 : 0,
	reporter: process.env.CI ? 'github' : 'list',
	use: {
		baseURL: `http://localhost:${port}`,
		// Instant theme/palette swaps and sidebar moves; tests that need motion opt back in.
		reducedMotion: 'reduce',
		colorScheme: 'light',
		trace: 'retain-on-failure',
	},
	projects: [
		{ name: 'chromium', use: { ...devices['Desktop Chrome'] } },
	],
	// Tests run against the production build, which is where the Next 16 CSS rewrite of light-dark() happens.
	webServer: {
		command: `npm run build && npm run start -- -p ${port}`,
		url: `http://localhost:${port}`,
		timeout: 180_000,
		reuseExistingServer: !process.env.CI,
	},
});
