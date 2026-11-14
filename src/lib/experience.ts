// Start month (YYYY-MM) of each skill shown on the site. Years count up from these automatically.
export const experienceStart = {
	career: '2017-05',
	javascript: '2017-05',
	node: '2018-05',
	react: '2018-05',
	css: '2018-05',
	materialUi: '2025-05',
	maps: '2025-11',
	testing: '2025-05',
	python: '2025-11',
	java: '2021-05',
	springBoot: '2023-05',
	databases: '2025-05',
	cloud: '2023-05',
	docker: '2025-05',
};

export type Skill = keyof typeof experienceStart;

/** Whole years from `start` (YYYY-MM) to `now`, counting a year once its start month comes around. */
export function yearsSince(start: string, now: Date): number {
	const [startYear, startMonth] = start.split('-').map(Number);
	const months = (now.getFullYear() - startYear) * 12 + (now.getMonth() + 1 - startMonth);
	return Math.max(0, Math.floor(months / 12));
}
