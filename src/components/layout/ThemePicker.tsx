'use client';
import { useEffect, useState } from 'react';
import { IconMoon, IconSun, IconSunMoon } from '@tabler/icons-react';

enum Theme {
	Default = 'light dark',
	Light = 'light only',
	Dark = 'dark only'
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
	const [initialTheme, setInitialTheme] = useState(Theme.Default);
	const [theme, setTheme] = useState(Theme.Default);

	useEffect(() => {
		setInitialTheme(window.matchMedia?.('(prefers-color-scheme: dark)').matches ? Theme.Dark : Theme.Light);
	}, []);

	function changeTheme(clickedTheme: Theme) {
		const newTheme: Theme = clickedTheme === theme ? Theme.Default : clickedTheme;
		setTheme(newTheme);
		setShowDropdown(false);
		const newDisplayedTheme = newTheme === Theme.Default ? initialTheme : newTheme;
		document.documentElement.style.setProperty('color-scheme', newTheme);
		document.documentElement.classList.remove('dark', 'light');
		document.documentElement.classList.add(newDisplayedTheme.split(' ')[0]);
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
