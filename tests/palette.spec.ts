import { expect, test } from '@playwright/test';
import { backgrounds, bodyBackground, pickPalette, pickTheme } from './helpers';

const palettes: (keyof typeof backgrounds)[] = ['Paper', 'Sage', 'Ink', 'Slate'];

test.describe('palette picker', () => {
	test('defaults to Paper', async ({ page }) => {
		await page.goto('/');

		expect(await bodyBackground(page)).toBe(backgrounds.Paper.light);
		await page.getByRole('button', { name: /Palette$/ }).click();
		await expect(page.getByRole('menuitemradio', { name: /Paper$/ })).toHaveAttribute('aria-checked', 'true');
	});

	for (const palette of palettes) {
		test(`${palette} applies in light and dark`, async ({ page }) => {
			await page.goto('/');

			await pickPalette(page, palette);
			await expect.poll(() => bodyBackground(page)).toBe(backgrounds[palette].light);

			await pickTheme(page, 'Dark');
			await expect.poll(() => bodyBackground(page)).toBe(backgrounds[palette].dark);
		});
	}

	test('marks the chosen palette as selected', async ({ page }) => {
		await page.goto('/');

		await pickPalette(page, 'Ink');
		await page.getByRole('button', { name: /Palette$/ }).click();

		await expect(page.getByRole('menuitemradio', { name: /Ink$/ })).toHaveAttribute('aria-checked', 'true');
		await expect(page.getByRole('menuitemradio', { name: /Paper$/ })).toHaveAttribute('aria-checked', 'false');
	});

	test('each swatch previews its own palette', async ({ page }) => {
		await page.goto('/');
		await page.getByRole('button', { name: /Palette$/ }).click();

		const swatchImages = await page.locator('[role=menu] [data-palette]').evaluateAll(swatches =>
			swatches.map(swatch => getComputedStyle(swatch).backgroundImage));

		expect(swatchImages).toHaveLength(palettes.length);
		expect(new Set(swatchImages).size).toBe(palettes.length);
	});
});
