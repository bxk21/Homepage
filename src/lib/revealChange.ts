import { flushSync } from 'react-dom';

/**
 * Applies a page-wide look change (theme or palette) behind a circular reveal that grows from `origin`.
 * A View Transition swaps snapshots instead of blending colors, so there is no grey midpoint.
 * Browsers without View Transitions, and users who prefer reduced motion, get an instant change.
 */
export function revealChange(origin: HTMLElement, apply: () => void) {
	const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
	if (!document.startViewTransition || reduceMotion) {
		apply();
		return;
	}

	const rect = origin.getBoundingClientRect();
	const x = rect.left + rect.width / 2;
	const y = rect.top + rect.height / 2;
	const radius = Math.hypot(Math.max(x, window.innerWidth - x), Math.max(y, window.innerHeight - y));

	// flushSync so React's state changes land inside the "new" snapshot.
	const transition = document.startViewTransition(() => flushSync(apply));
	transition.ready.then(() => {
		document.documentElement.animate(
			{ clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${radius}px at ${x}px ${y}px)`] },
			{ duration: 500, easing: 'ease-in-out', pseudoElement: '::view-transition-new(root)' }
		);
	});
}
