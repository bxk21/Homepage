'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";


export default function SidebarLink({ href, icon, prefetch, className, linkClassName, children }: { href: string, icon: React.ReactElement, prefetch?: boolean, className?: string, linkClassName?: string, children: React.ReactNode }) {
	const pathName = usePathname();
	const isSelected = href.length === 1 ?
		pathName === href :
		pathName.startsWith(href);
	const hoverClass = 'hover:underline hover:underline-offset-4 hover:bg-linear-(--highlight-gradient) hover:text-(--color-scheme)';
	const selectedClass = 'bg-linear-(--highlight-gradient) text-(--color-scheme) bg-[2rem_0rem] lg:bg-center transition-[background-position] duration-500';

	// Padding lives on the link, not the <li>, so the whole highlighted row is clickable.
	const listClass = `${className ?? ''} ${isSelected ? selectedClass : hoverClass}`;
	const linkClass = `flex items-center justify-between gap-8 px-4 lg:px-12 py-2 transition-[padding] duration-500 ease-in-out ${linkClassName ?? ''}`;

	return (
		<li className={listClass}>
			<Link href={href} prefetch={prefetch} className={linkClass}>
				{children}
				{icon}
			</Link>
		</li>
	);
}