import { Page } from '@playwright/test';

export function bodyBackground(page: Page) {
	return page.evaluate(() => getComputedStyle(document.body).backgroundColor);
}

export async function pickTheme(page: Page, theme: 'Light' | 'Dark') {
	await page.getByRole('button', { name: /Theme$/ }).click();
	await page.getByRole('menuitemradio', { name: new RegExp(`${theme}$`) }).click();
}

export async function pickPalette(page: Page, palette: 'Paper' | 'Sage' | 'Ink' | 'Slate') {
	await page.getByRole('button', { name: /Palette$/ }).click();
	await page.getByRole('menuitemradio', { name: new RegExp(`${palette}$`) }).click();
}

// Background colors from globals.css, as getComputedStyle reports them.
export const backgrounds = {
	Paper: { light: 'rgb(250, 247, 242)', dark: 'rgb(23, 20, 18)' },
	Sage: { light: 'rgb(244, 246, 241)', dark: 'rgb(17, 22, 18)' },
	Ink: { light: 'rgb(251, 251, 253)', dark: 'rgb(14, 13, 18)' },
	Slate: { light: 'rgb(246, 247, 249)', dark: 'rgb(18, 21, 26)' },
};
