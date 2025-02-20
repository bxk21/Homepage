'use client'
import { useEffect, useState } from 'react';
import { IconMoon, IconSun, IconSunMoon } from '@tabler/icons-react';

enum Theme {
	Default = 'light dark',
	Light = 'light only',
	Dark = 'dark only'
}

const defaultThemeIcon = <IconSunMoon
	className='grayscale'
	aria-label="Light Theme Icon"
	size='20'
/>
const lightThemeIcon = <IconSun
	className='grayscale'
	aria-label="Light Theme Icon"
	size='20'
/>
const darkThemeIcon = <IconMoon
	className='grayscale'
	aria-label="Light Theme Icon"
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
	}, [])

	function changeTheme(clickedTheme: Theme) {
		const newTheme: Theme = clickedTheme === theme ? Theme.Default : clickedTheme;
		setTheme(newTheme);
		setShowDropdown(false);
		const newDisplayedTheme = newTheme === Theme.Default ? initialTheme : newTheme;
		document.documentElement.style.setProperty('color-scheme', newTheme)
		document.documentElement.classList.remove('dark', 'light');
		document.documentElement.classList.add(newDisplayedTheme.split(' ')[0])
	}

	return (
		<div className='relative'>
			<button
				className='flex items-center gap-2'
				// className='rounded-full border border-solid border-white/[.08] transition-colors flex items-center justify-center hover:bg-[#444444] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44'
				aria-haspopup="menu"
				onClick={() => setShowDropdown(!showDropdown)}
			>
				{themeIcons[theme]}
				Theme
			</button>
			<ul aria-labelledby="themes-menu-button"
				className={`absolute p-1 -ml-1 border rounded-md bg-(--background) border-(--foreground)
					-mt-8 transition ease-out transform ${showDropdown ? 'translate-y-8' : 'opacity-0 pointer-events-none'}`}
			>
				<li>
					<button className='flex items-center gap-2' onClick={() => changeTheme(Theme.Light)}>
						{lightThemeIcon} Light
					</button>
				</li>
				<li>
					<button className='flex items-center gap-2' onClick={() => changeTheme(Theme.Dark)}>
						{darkThemeIcon} Dark
					</button>
				</li>
			</ul>
		</div>
	);
}
