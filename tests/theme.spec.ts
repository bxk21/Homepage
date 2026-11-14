import { expect, Page, test } from '@playwright/test';
import { backgrounds, bodyBackground, pickTheme } from './helpers';

test.describe('theme picker', () => {
	test('follows the system theme by default', async ({ page }) => {
		await page.emulateMedia({ colorScheme: 'dark' });
		await page.goto('/');
		expect(await bodyBackground(page)).toBe(backgrounds.Paper.dark);

		await page.emulateMedia({ colorScheme: 'light' });
		expect(await bodyBackground(page)).toBe(backgrounds.Paper.light);
	});

	// Regression: under Next 16 the build rewrites light-dark(), and an inline color-scheme left backgrounds unchanged.
	test('Light overrides a dark system theme, backgrounds included', async ({ page }) => {
		await page.emulateMedia({ colorScheme: 'dark' });
		await page.goto('/');

		await pickTheme(page, 'Light');

		await expect(page.locator('html')).toHaveClass(/\blight\b/);
		await expect.poll(() => bodyBackground(page)).toBe(backgrounds.Paper.light);
	});

	test('Dark overrides a light system theme', async ({ page }) => {
		await page.goto('/');

		await pickTheme(page, 'Dark');

		await expect(page.locator('html')).toHaveClass(/\bdark\b/);
		await expect.poll(() => bodyBackground(page)).toBe(backgrounds.Paper.dark);
	});

	test('picking the active theme again returns to the system theme', async ({ page }) => {
		await page.goto('/');

		await pickTheme(page, 'Dark');
		await expect.poll(() => bodyBackground(page)).toBe(backgrounds.Paper.dark);
		await expect(page.getByRole('button', { name: /Theme$/ })).toHaveAccessibleName(/Dark Theme Icon/);

		await pickTheme(page, 'Dark');

		await expect(page.locator('html')).not.toHaveClass(/\b(light|dark)\b/);
		await expect.poll(() => bodyBackground(page)).toBe(backgrounds.Paper.light);
		await expect(page.getByRole('button', { name: /Theme$/ })).toHaveAccessibleName(/Default Theme Icon/);
	});

	test('the theme choice survives client-side navigation', async ({ page }) => {
		await page.goto('/');
		await pickTheme(page, 'Dark');

		await page.getByRole('link', { name: /^About / }).click();
		await expect(page).toHaveURL(/\/about$/);

		expect(await bodyBackground(page)).toBe(backgrounds.Paper.dark);
	});
});

test.describe('circular reveal', () => {
	function revealClipPaths(page: Page) {
		return page.evaluate(() => document.getAnimations().flatMap(animation => {
			const effect = animation.effect;
			if (!(effect instanceof KeyframeEffect) || effect.pseudoElement !== '::view-transition-new(root)') {
				return [];
			}
			return effect.getKeyframes().map(frame => String(frame.clipPath));
		}));
	}

	test('switching theme reveals it in a growing circle when motion is allowed', async ({ page }) => {
		await page.emulateMedia({ reducedMotion: 'no-preference' });
		await page.goto('/');

		await pickTheme(page, 'Dark');

		await expect.poll(() => revealClipPaths(page)).toEqual([
			expect.stringMatching(/^circle\(0px at /),
			expect.stringMatching(/^circle\([1-9]\d*(\.\d+)?px at /),
		]);
		await expect.poll(() => bodyBackground(page)).toBe(backgrounds.Paper.dark);
	});

	test('reduced motion switches instantly, with no reveal', async ({ page }) => {
		await page.goto('/');

		await pickTheme(page, 'Dark');

		expect(await bodyBackground(page)).toBe(backgrounds.Paper.dark);
		expect(await revealClipPaths(page)).toEqual([]);
	});
});
