import { experienceStart, Skill, yearsSince } from '@/lib/experience';
import LiveYears from './LiveYears';

/** Renders "9 years" (or "9 Years" with `capitalize`). A server component: pages are prerendered,
    so this count is taken at build time and baked into the HTML, then updated in the browser. */
export default function YearsOfExperience({ skill, capitalize = false }: { skill: Skill, capitalize?: boolean }) {
	const start = experienceStart[skill];
	return <LiveYears start={start} prerendered={yearsSince(start, new Date())} capitalize={capitalize}/>;
}
