'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";


export default function SidebarLink({ href, icon, prefetch, className, linkClassName, children }: { href: string, icon: React.ReactElement, prefetch?: boolean, className?: string, linkClassName?: string, children: React.ReactNode }) {
	const pathName = usePathname();
	const isSelected = href.length === 1 ?
		pathName === href :
		pathName.startsWith(href);
	const hoverClass = 'hover:bg-(--accent-soft) hover:text-(--accent)';
	const selectedClass = 'bg-(--accent-soft) text-(--accent) font-semibold shadow-[inset_3px_0_0_var(--accent)]';

	// Padding lives on the link, not the <li>, so the whole highlighted row is clickable.
	const listClass = `${className ?? ''} transition-colors ${isSelected ? selectedClass : hoverClass}`;
	const linkClass = `flex items-center justify-between gap-8 px-4 lg:px-12 py-2 transition-[padding] duration-500 ease-in-out motion-reduce:transition-none ${linkClassName ?? ''}`;

	return (
		<li className={listClass}>
			<Link href={href} prefetch={prefetch} className={linkClass} aria-current={isSelected ? 'page' : undefined}>
				{children}
				{icon}
			</Link>
		</li>
	);
}