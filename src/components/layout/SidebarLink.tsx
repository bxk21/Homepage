'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";


export default function SidebarLink({ href, prefetch, children }: { href: string, prefetch?: boolean, children: React.ReactNode }) {
	const pathName = usePathname();
	const isSelected = href.length === 1 ?
		pathName === href :
		pathName.startsWith(href);
	const linkClass = 'flex items-center gap-8 px-12 hover:underline hover:underline-offset-4';
	const selectedClass = ' bg-linear-(--highlight-gradient) text-(--color-scheme)';

	const className = linkClass + (isSelected ? selectedClass : '');

	return (
		<li>
			<Link href={href} prefetch={prefetch} className={className}>
				{children}
			</Link>
		</li>
	);
}