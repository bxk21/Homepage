'use client';
import { useSyncExternalStore } from 'react';
import { yearsSince } from '@/lib/experience';

const subscribe = () => () => {};

/** Hydrates with the build-time count from the HTML, then shows the count for the browser's date. */
export default function LiveYears({ start, prerendered, capitalize }: { start: string, prerendered: number, capitalize: boolean }) {
	const years = useSyncExternalStore(
		subscribe,
		() => yearsSince(start, new Date()),
		() => prerendered
	);
	const unit = years === 1 ? 'year' : 'years';
	return `${years} ${capitalize ? unit[0].toUpperCase() + unit.slice(1) : unit}`;
}
