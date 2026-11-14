import { expect, Page, test } from '@playwright/test';

const routes = [
	{ name: 'Home', path: '/', title: "Bo Kang's Portfolio" },
	{ name: 'Contact', path: '/contact', title: 'Contact Info | Bo Kang' },
	{ name: 'Resume', path: '/resume', title: 'Resume | Bo Kang' },
	{ name: 'About', path: '/about', title: 'About | Bo Kang' },
	{ name: 'This Site', path: '/thisSite', title: 'About this Site | Bo Kang' },
];

test.describe('sidebar navigation', () => {
	test.beforeEach(async ({ page }) => {
		// The resume page embeds OneDrive; keep tests off the network.
		await page.route(/^https?:\/\/(?!localhost)/, route => route.abort());
	});

	for (const { name, path, title } of routes) {
		test(`${name} link navigates and marks itself current`, async ({ page }) => {
			await page.goto(path === '/' ? '/contact' : '/');

			// Each link's name is its label followed by its icon's label, e.g. "Home Home icon".
			await page.getByRole('link', { name: new RegExp(`^${name} `) }).click();

			await expect(page).toHaveURL(new RegExp(`${path}$`));
			await expect(page).toHaveTitle(title);
			await expect(page.locator('[aria-current=page]')).toHaveAccessibleName(new RegExp(`^${name} `));
		});
	}

	// Regression: the highlighted row used to be taller than the link inside it.
	test('the whole highlighted row is clickable, edges included', async ({ page }) => {
		await page.goto('/');
		const row = page.locator('li', { has: page.getByRole('link', { name: /^About / }) });
		const box = await row.boundingBox();
		if (!box) {
			throw new Error('About row has no bounding box');
		}

		await page.mouse.click(box.x + box.width / 2, box.y + 1);
		await expect(page).toHaveURL(/\/about$/);

		await page.goto('/');
		await page.mouse.click(box.x + box.width / 2, box.y + box.height - 1);
		await expect(page).toHaveURL(/\/about$/);
	});
});

test.describe('hiding sidebar', () => {
	function sidebarSlot(page: Page) {
		return page.getByTestId('sidebar-drawer').locator('..');
	}

	test('shows the full sidebar on wide screens', async ({ page }) => {
		await page.setViewportSize({ width: 1280, height: 800 });
		await page.goto('/');

		expect((await sidebarSlot(page).boundingBox())?.width).toBe(320);
		await expect(page.getByText('Bo Kang', { exact: true }).first()).toBeVisible();
		await expect(page.getByText('Bo', { exact: true })).toBeHidden();
	});

	test('shrinks to icons below 64rem', async ({ page }) => {
		await page.setViewportSize({ width: 800, height: 800 });
		await page.goto('/');

		expect((await sidebarSlot(page).boundingBox())?.width).toBe(64);
		await expect(page.getByText('Bo', { exact: true })).toBeVisible();
		// Icons stay reachable in the visible strip.
		const homeIcon = page.getByLabel('Home icon');
		const iconBox = await homeIcon.boundingBox();
		expect(iconBox && iconBox.x + iconBox.width).toBeLessThanOrEqual(64);
	});
});
