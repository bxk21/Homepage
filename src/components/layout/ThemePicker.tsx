'use client';
import { useState } from 'react';
import { IconMoon, IconSun, IconSunMoon } from '@tabler/icons-react';
import HeaderMenu from './HeaderMenu';
import { revealChange } from '@/lib/revealChange';

enum Theme {
	Default = 'default',
	Light = 'light',
	Dark = 'dark'
}

const themeIcons = {
	[Theme.Default]: <IconSunMoon aria-label="Default Theme Icon" size='20'/>,
	[Theme.Light]: <IconSun aria-label="Light Theme Icon" size='20'/>,
	[Theme.Dark]: <IconMoon aria-label="Dark Theme Icon" size='20'/>
};

export default function ThemePicker() {
	const [theme, setTheme] = useState(Theme.Default);

	function changeTheme(clickedTheme: Theme, origin: HTMLElement) {
		// Picking the active theme again returns to the system default.
		const newTheme: Theme = clickedTheme === theme ? Theme.Default : clickedTheme;
		revealChange(origin, () => {
			setTheme(newTheme);
			document.documentElement.classList.remove(Theme.Light, Theme.Dark);
			if (newTheme !== Theme.Default) {
				document.documentElement.classList.add(newTheme);
			}
		});
	}

	return (
		<HeaderMenu
			label='Theme'
			icon={themeIcons[theme]}
			items={[Theme.Light, Theme.Dark].map(option => ({
				key: option,
				label: option === Theme.Light ? 'Light' : 'Dark',
				icon: themeIcons[option],
				selected: theme === option,
				onSelect: origin => changeTheme(option, origin)
			}))}
		/>
	);
}
