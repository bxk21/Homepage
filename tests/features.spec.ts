import { expect, test } from '@playwright/test';

test.describe('swapping icons', () => {
	// Regression: a blanket reduced-motion rule froze these. A crossfade is not motion, so it runs either way.
	const motionSettings: ('reduce' | 'no-preference')[] = ['reduce', 'no-preference'];
	for (const reducedMotion of motionSettings) {
		test(`keep cycling with reduced motion: ${reducedMotion}`, async ({ page }) => {
			await page.emulateMedia({ reducedMotion });
			await page.goto('/contact');

			for (const [selector, name] of [['.fade-in-out', 'fadeInOutHold'], ['.fade-out-in', 'fadeOutInHold']]) {
				const animation = await page.locator(selector).first().evaluate(icon => {
					const style = getComputedStyle(icon);
					const running = icon.getAnimations().some(a => a.playState === 'running');
					return { name: style.animationName, iterations: style.animationIterationCount, duration: style.animationDuration, running };
				});
				expect(animation).toEqual({ name, iterations: 'infinite', duration: '4s', running: true });
			}
		});
	}

	test('the phone and texting icons are shown at opposite times', async ({ page }) => {
		await page.goto('/contact');
		const opacities = () => page.evaluate(() => ['Phone icon', 'Texting icon'].map(label => {
			const icon = document.querySelector(`[aria-label="${label}"]`);
			return icon ? Number(getComputedStyle(icon).opacity) : null;
		}));

		// Seek both animations to the middle of the "phone visible" hold, then the "texting visible" hold.
		const seek = (ms: number) => page.evaluate(t => document.getAnimations().forEach(a => {
			a.pause();
			a.currentTime = t;
		}), ms);

		await seek(0);
		expect(await opacities()).toEqual([0, 1]);
		await seek(2000);
		expect(await opacities()).toEqual([1, 0]);
	});
});

test.describe('copy to clipboard', () => {
	test.use({ permissions: ['clipboard-read', 'clipboard-write'] });

	test('copies the phone number and the email', async ({ page }) => {
		await page.goto('/contact');
		const copyButtons = page.getByRole('button', { name: 'Copy Icon' });

		await copyButtons.nth(0).click();
		expect(await page.evaluate(() => navigator.clipboard.readText())).toBe('+17349850668');

		await copyButtons.nth(1).click();
		expect(await page.evaluate(() => navigator.clipboard.readText())).toBe('kujile6@gmail.com');
	});

	test('explains itself on hover', async ({ page }) => {
		await page.emulateMedia({ reducedMotion: 'no-preference' });
		await page.goto('/contact');
		const hint = page.getByText('Copy To Clipboard').first();
		const opacity = () => hint.evaluate(el => getComputedStyle(el).opacity);

		expect(await opacity()).toBe('0');
		await page.getByRole('button', { name: 'Copy Icon' }).first().hover();
		await expect.poll(opacity).toBe('1');
	});
});

test.describe('pages', () => {
	const pages = [
		{ path: '/', text: 'Welcome to my portfolio.' },
		{ path: '/about', text: 'Credentials' },
		{ path: '/about/secplus', text: 'Download' },
		{ path: '/about/omgilovemywife', text: '👀👀👀' },
		{ path: '/contact', text: 'Contact me!' },
		{ path: '/resume', text: null },
		{ path: '/thisSite', text: 'About this Site' },
	];

	for (const { path, text } of pages) {
		test(`${path} renders without errors`, async ({ page }) => {
			await page.route(/^https?:\/\/(?!localhost)/, route => route.abort());
			const errors: string[] = [];
			page.on('pageerror', error => errors.push(error.message));
			page.on('console', message => {
				// Vercel Analytics' script only exists on Vercel, so it 404s locally.
				if (message.type() === 'error' && !message.location().url.includes('/_vercel/')) {
					errors.push(message.text());
				}
			});

			const response = await page.goto(path);

			expect(response?.status()).toBe(200);
			if (text) {
				await expect(page.getByText(text, { exact: true }).first()).toBeVisible();
			}
			expect(errors).toEqual([]);
		});
	}
});
