import { expect, Page, test } from '@playwright/test';
import { yearsSince } from '../src/lib/experience';

test.describe('yearsSince', () => {
	test('counts a year once its start month comes around', () => {
		expect(yearsSince('2017-05', new Date(2026, 3, 30))).toBe(8);
		expect(yearsSince('2017-05', new Date(2026, 4, 1))).toBe(9);
		expect(yearsSince('2017-05', new Date(2026, 10, 13))).toBe(9);
	});

	test('never goes negative', () => {
		expect(yearsSince('2030-01', new Date(2026, 0, 1))).toBe(0);
	});
});

test.describe('years of experience follow the browser date', () => {
	function card(page: Page, skill: string) {
		return page.locator('li').filter({ has: page.getByRole('heading', { name: skill, exact: true }) });
	}

	// Counts on 2027-04-30 and 2027-05-01: May starts tick over between them, November starts do not.
	const expected = [
		{ skill: 'Javascript / Typescript', before: 9, after: 10 },
		{ skill: 'NodeJS / NextJS / Express', before: 8, after: 9 },
		{ skill: 'React: Redux / TanStack Query', before: 8, after: 9 },
		{ skill: 'CSS: SASS / Tailwind', before: 8, after: 9 },
		{ skill: 'Material UI / MUI X', before: 1, after: 2 },
		{ skill: 'Maps: deck.gl / MapLibre / Google Maps', before: 1, after: 1 },
		{ skill: 'Testing: Playwright / Jest / Storybook', before: 1, after: 2 },
		{ skill: 'Python: FastAPI / Pydantic', before: 1, after: 1 },
		{ skill: 'Java', before: 5, after: 6 },
		{ skill: 'Spring Boot', before: 3, after: 4 },
		{ skill: 'Databases: PostgreSQL / BigQuery / MongoDB / Redis', before: 1, after: 2 },
		{ skill: 'GCP: Cloud Run / Pub/Sub / BigQuery · AWS: SES / SNS', before: 3, after: 4 },
		{ skill: 'Docker', before: 1, after: 2 },
	];

	const label = (years: number) => `${years} ${years === 1 ? 'Year' : 'Years'} of Experience`;

	test('About counts tick over in their start month', async ({ page }) => {
		await page.clock.setFixedTime(new Date(2027, 3, 30));
		await page.goto('/about');
		for (const { skill, before } of expected) {
			await expect(card(page, skill)).toContainText(label(before));
		}

		await page.clock.setFixedTime(new Date(2027, 4, 1));
		await page.reload();
		for (const { skill, after } of expected) {
			await expect(card(page, skill)).toContainText(label(after));
		}
	});

	test('every skill card on About is counted', async ({ page }) => {
		await page.goto('/about');
		await expect(page.getByText(/\d+ Years? of Experience/)).toHaveCount(expected.length);
	});

	test('a single year reads "1 Year"', async ({ page }) => {
		await page.clock.setFixedTime(new Date(2026, 10, 13));
		await page.goto('/about');

		await expect(card(page, 'Docker')).toHaveText(/\D1 Year of Experience$/);
	});

	test('the home intro counts from May 2017', async ({ page }) => {
		await page.clock.setFixedTime(new Date(2031, 6, 1));
		await page.goto('/');

		await expect(page.getByText(/Fullstack Software Engineer with 14 years of experience/)).toBeVisible();
	});

	test('a date far from the build date hydrates without errors', async ({ page }) => {
		const errors: string[] = [];
		page.on('pageerror', error => errors.push(error.message));
		page.on('console', message => {
			if (message.type() === 'error' && !message.location().url.includes('/_vercel/')) {
				errors.push(message.text());
			}
		});
		await page.clock.setFixedTime(new Date(2040, 0, 1));

		await page.goto('/about');

		await expect(card(page, 'Java')).toContainText('18 Years of Experience');
		expect(errors).toEqual([]);
	});
});
