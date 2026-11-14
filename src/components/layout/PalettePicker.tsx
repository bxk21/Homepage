'use client';
import { useState } from 'react';
import { IconPalette } from '@tabler/icons-react';
import HeaderMenu from './HeaderMenu';
import { revealChange } from '@/lib/revealChange';

// Keys match the [data-palette] blocks in globals.css.
type Palette = 'paper' | 'sage' | 'ink' | 'slate';

const palettes: { key: Palette, label: string }[] = [
	{ key: 'paper', label: 'Paper' },
	{ key: 'sage', label: 'Sage' },
	{ key: 'ink', label: 'Ink' },
	{ key: 'slate', label: 'Slate' }
];

function Swatch({ palette }: { palette: Palette }) {
	return (
		<span
			data-palette={palette}
			aria-hidden
			className='size-5 rounded-full border-2 border-(--border) bg-linear-to-br from-(--bg) from-50% to-(--accent) to-50%'
		/>
	);
}

export default function PalettePicker() {
	const [palette, setPalette] = useState<Palette>('paper');

	function changePalette(newPalette: Palette, origin: HTMLElement) {
		if (newPalette === palette) {
			return;
		}
		revealChange(origin, () => {
			setPalette(newPalette);
			document.documentElement.dataset.palette = newPalette;
		});
	}

	return (
		<HeaderMenu
			label='Palette'
			icon={<IconPalette aria-label="Palette Icon" size='20'/>}
			items={palettes.map(({ key, label }) => ({
				key,
				label,
				icon: <Swatch palette={key}/>,
				selected: palette === key,
				onSelect: origin => changePalette(key, origin)
			}))}
		/>
	);
}
