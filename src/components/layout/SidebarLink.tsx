'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";


export default function SidebarLink({ href, icon, prefetch, children }: { href: string, icon: React.ReactElement, prefetch?: boolean, children: React.ReactNode }) {
	const pathName = usePathname();
	const isSelected = href.length === 1 ?
		pathName === href :
		pathName.startsWith(href);
	const linkClass = 'flex items-center justify-between gap-8 px-4 lg:px-12 py-2 hover:underline hover:underline-offset-4';
	const selectedClass = ' bg-(--accented-primary) lg:bg-linear-(--highlight-gradient) text-(--color-scheme)';
	// Keep this space     ^

	const className = linkClass + (isSelected ? selectedClass : '');

	return (
		<li>
			<Link href={href} prefetch={prefetch} className={className}>
				{children}
				<div className=''>
					{icon}
				</div>
			</Link>
		</li>
	);
}