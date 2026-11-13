'use client';
import { useState } from 'react';
import { IconMoon, IconSun, IconSunMoon } from '@tabler/icons-react';

enum Theme {
	Default = 'default',
	Light = 'light',
	Dark = 'dark'
}

const defaultThemeIcon = <IconSunMoon
	className='grayscale'
	aria-label="Default Theme Icon"
	size='20'
/>;
const lightThemeIcon = <IconSun
	className='grayscale'
	aria-label="Light Theme Icon"
	size='20'
/>;
const darkThemeIcon = <IconMoon
	className='grayscale'
	aria-label="Dark Theme Icon"
	size='20'
/>;

const themeIcons = {
	[Theme.Default]: defaultThemeIcon,
	[Theme.Light]: lightThemeIcon,
	[Theme.Dark]: darkThemeIcon
};

export default function ThemePicker() {
	const [showDropdown, setShowDropdown] = useState(false);
	const [theme, setTheme] = useState(Theme.Default);

	function changeTheme(clickedTheme: Theme) {
		const newTheme: Theme = clickedTheme === theme ? Theme.Default : clickedTheme;
		setTheme(newTheme);
		setShowDropdown(false);
		document.documentElement.classList.remove(Theme.Light, Theme.Dark);
		if (newTheme !== Theme.Default) {
			document.documentElement.classList.add(newTheme);
		}
	}

	return (
		<div className='relative'>
			<button
				className='flex gap-2 cursor-pointer'
				aria-haspopup="menu"
				onClick={() => setShowDropdown(!showDropdown)}
			>
				{themeIcons[theme]}
				Theme
			</button>
			<ul aria-labelledby="themes-menu-button"
				className={`absolute p-1 -ml-1 border rounded-md bg-(--background) border-(--invert-scheme)
					-mt-8 transition ease-out transform ${showDropdown ? 'translate-y-8' : 'opacity-0 pointer-events-none'}`}
			>
				<li>
					<button className='flex gap-2 cursor-pointer' onClick={() => changeTheme(Theme.Light)}>
						{lightThemeIcon} Light
					</button>
				</li>
				<li>
					<button className='flex gap-2 cursor-pointer' onClick={() => changeTheme(Theme.Dark)}>
						{darkThemeIcon} Dark
					</button>
				</li>
			</ul>
		</div>
	);
}
