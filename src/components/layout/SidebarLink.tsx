'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";


export default function SidebarLink({ href, icon, prefetch, className, children }: { href: string, icon: React.ReactElement, prefetch?: boolean, className?: string, children: React.ReactNode }) {
	const pathName = usePathname();
	const isSelected = href.length === 1 ?
		pathName === href :
		pathName.startsWith(href);
	const defaultClass = 'flex items-center justify-between gap-8 px-4 lg:px-12 py-2 transition-[padding] duration-500 ease-in-out '; // < Keep trailing space
	const hoverClass = 'hover:underline hover:underline-offset-4 hover:bg-linear-(--highlight-gradient) hover:text-(--color-scheme)';
	const selectedClass = 'bg-linear-(--highlight-gradient) text-(--color-scheme) bg-[2rem_0rem] lg:bg-center transition-[background-position] duration-500';

	const linkClass = defaultClass + (isSelected ? selectedClass : hoverClass);

	return (
		<li className={className}>
			<Link href={href} prefetch={prefetch} className={linkClass}>
				{children}
				<div className=''>
					{icon}
				</div>
			</Link>
		</li>
	);
}