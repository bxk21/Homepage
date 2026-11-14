'use client';
import { ReactNode, useRef, useState } from 'react';

export type HeaderMenuItem = {
	key: string,
	label: string,
	icon: ReactNode,
	selected: boolean,
	onSelect: (origin: HTMLElement) => void
};

export default function HeaderMenu({ label, icon, items }: { label: string, icon: ReactNode, items: HeaderMenuItem[] }) {
	const [open, setOpen] = useState(false);
	const buttonRef = useRef<HTMLButtonElement>(null);

	function select(item: HeaderMenuItem) {
		setOpen(false);
		if (buttonRef.current) {
			item.onSelect(buttonRef.current);
		}
	}

	return (
		<div className='relative'>
			<button
				ref={buttonRef}
				className='flex gap-2 items-center cursor-pointer rounded-lg px-3 py-1.5 hover:bg-(--accent-soft) transition-colors'
				aria-haspopup="menu"
				aria-expanded={open}
				onClick={() => setOpen(!open)}
			>
				{icon}
				{label}
			</button>
			<ul
				role="menu"
				className={`absolute right-0 z-10 mt-1 min-w-36 p-1 flex flex-col gap-0.5 rounded-lg border border-(--border) bg-(--surface) shadow-lg
					transition ease-out ${open ? 'translate-y-0' : '-translate-y-2 motion-reduce:translate-y-0 opacity-0 pointer-events-none'}`}
			>
				{items.map(item => (
					<li key={item.key} role="none">
						<button
							role="menuitemradio"
							aria-checked={item.selected}
							className={`w-full flex gap-2 items-center cursor-pointer rounded-md px-2 py-1.5 hover:bg-(--accent-soft) ${item.selected ? 'text-(--accent) font-semibold' : ''}`}
							onClick={() => select(item)}
						>
							{item.icon} {item.label}
						</button>
					</li>
				))}
			</ul>
		</div>
	);
}
